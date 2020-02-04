<?php
if(!defined("INCLUDE_ROOT"))
   include_once("../../include/config.php");
include_once(INCLUDE_ROOT . "db.php");

include_once(INCLUDE_ROOT . "entity/ga_user_levels_query.php");
include_once(INCLUDE_ROOT . "entity/ga_user_badges_query.php");
include_once(INCLUDE_ROOT . "entity/ga_user_achievements_query.php");
include_once(INCLUDE_ROOT . "entity/ga_badges_query.php");
include_once(INCLUDE_ROOT . "entity/ga_level_associate_query.php");


include_once(INCLUDE_ROOT . "bll/ga_user_levels_bll.php");
include_once(INCLUDE_ROOT . "bll/ga_user_badges_bll.php");
include_once(INCLUDE_ROOT . "bll/ga_user_achievements_bll.php");
include_once(INCLUDE_ROOT . "bll/ga_badges_bll.php");
include_once(INCLUDE_ROOT . "bll/ga_level_associate_bll.php");

include_once(INCLUDE_ROOT . "events/process_reward_features.php");

include_once(INCLUDE_ROOT . "bll/utility.php");

class ga_core_bll {
  
  function trigger_item($userid, $itemid) {
	    $addNotification = false;
	    /*'******************************************************************'
        ' Check whether user exist in ga_user_levels
        '******************************************************************'*/
		$user_level_check = new ga_user_levels_bll();
		if(!$user_level_check->check(array('userid'=> $userid)))
		{
			// user not exist
			// add user
			$user_level = array();
            $user_level["userid"] = $userid;
            $user_level["levels"] = 1; 
            $user_level["points"] = 0;
            $user_level["credits"] = 0;
			$user_level["init_points"] = 0; 
            $user_level["max_points"] = 0;
            $user_level["level_id"] = 0;
			
			$user_add_level = new ga_user_levels_bll();
			$user_add_level->add($user_level);
		}
		/*'******************************************************************'
        ' LOAD BADGE INFORMATION'
        '******************************************************************'*/
		$badges_query = new ga_badges_query();
		$badges_query->id = $itemid;
		$badges_query->order = "id desc";
		
		$bobj = new ga_badges_bll();
        $badge_info = $bobj->fetch_records($badges_query);
		
		/*'******************************************************************'
        ' PROCESS USER LEVELS, CREDITS,
        '******************************************************************' */
		$user_query = new ga_user_levels_query();
        $user_query->userid = $userid;
		$user_query->order = "userid desc";
		$uobj = new ga_user_levels_bll();
        $user_info = $uobj->fetch_records($user_query);
		
		if($badge_info[0]->type == '3')
		{
		    /*'******************************************************************'
            ' LEVEL UP'
            '*******************************************************************/
			$level_info = array();
            $level_info["levels"] = $badge_info[0]->ilevel;
            $level_info["init_points"] = 0; //'reset to zero for new level calculation'
            $level_info["max_points"] = $badge_info[0]->xp; // 'maximum points required to cross this level'
            $level_info["level_id"] = $badge_info[0]->id;  // ' assign allocated id for future processing'

			$level_obj = new ga_user_levels_bll();
            $level_obj->update($level_info, array("userid" => $userid));
			$addNotification = true;
			/*'******************************************************************'
            ' Check whether there is any reward associated with this level
            '*******************************************************************/
			$level_associate_entity = new ga_level_associate_query();
			$level_associate_entity->levelid = $level_info["level_id"];
			$level_associate_entity->order = "id desc";
			$level_associate_obj = new ga_level_associate_bll();
            $level_associate_output = $level_associate_obj->fetch_records($level_associate_entity);
			if(count($level_associate_output) > 0)
			{
				foreach($level_associate_output as $item)
				{					
					// recursive call this function to award this reward
					$this->trigger_item($userid, $item->rewardid);
				}
			}
		}
		else if($badge_info[0]->type == '4')
		{
			/******************************************************************'
            ' POINTS'
            '******************************************************************' */
			$currentpoints = $user_info[0]->points;
			$initpoints = $user_info[0]->init_points;
			
            if($badge_info[0]->isdeduct == 1)
			{
				// 'Deduct Points'
				$currentpoints = $currentpoints - $badge_info[0]->xp;
				$initpoints = $initpoints - $badge_info[0]->xp;
				if($currentpoints < 0)
				  $currentpoints =0;
				if($initpoints < 0)
				  $initpoints = 0; 
			}
			else
			{
				// increment points
				$currentpoints = $currentpoints + $badge_info[0]->xp;
				$initpoints = $initpoints + $badge_info[0]->xp;
			}
			$points_info = array();
            $points_info["points"] = $currentpoints;
			$points_info["init_points"] = $initpoints;
            $pointobj = new ga_user_levels_bll();
            $pointobj->update($points_info, array("userid" => $userid));
			$addNotification = true;
			if($initpoints >= $user_info[0]->max_points) 
			{
				// Level Up
				$currentlevel = $user_info[0]->levels;
				$nextlevel = $currentlevel+1;
				$next_badges_query = new ga_badges_query();
				$next_badges_query->ilevel = $nextlevel;
				$next_badges_query->order = "id desc";
				$next_bobj = new ga_badges_bll();
				$next_badge_info = $next_bobj->fetch_records($next_badges_query);

                if(count($next_badge_info) > 0)
				{
					//Level Exist'
					$level_info = array();
					$level_info["levels"] = $nextlevel;
					$level_info["init_points"] = 0; //'reset to zero for new level calculation'
					$level_info["max_points"] = $next_badge_info[0]->xp; // 'maximum points required to cross this level'
					$level_info["level_id"] = $next_badge_info[0]->id;  // ' assign allocated id for future processing'
					$level_obj = new ga_user_levels_bll();
                    $level_obj->update($level_info, array("userid" => $userid));
					/*'******************************************************************'
					' Check whether there is any reward associated with new level
					'******************************************************************/
					$level_associate_entity = new ga_level_associate_query();
					$level_associate_entity->levelid = $next_badge_info[0]->id;
					$level_associate_entity->order = "id desc";
					$level_associate_obj = new ga_level_associate_bll();
					$level_associate_output = $level_associate_obj->fetch_records($level_associate_entity);
					if(count($level_associate_output) > 0)
					{
						foreach($level_associate_output as $item)
						{					
							// recursive call this function to award this reward
							$this->trigger_item($userid, $item->rewardid);
						}
					}
				}
				///
			}
		}
		else if($badge_info[0]->type == '5')
		{
			/******************************************************************'
            ' CREDITS '
            '*******************************************************************/
			$currentcredits = $user_info[0]->credits;
			if($badge_info[0]->isdeduct == 1)
			{
				$currentcredits = $currentcredits -$badge_info[0]->credits;
				if($currentcredits < 0)
				  $currentcredits = 0;
			}
			else
			{
				$currentcredits = $currentcredits + $badge_info[0]->credits;
			}
            $gobj = new ga_user_levels_bll();
			$gobj->update(array("credits" => $currentcredits), array("userid" => $userid));
			$addNotification = true;
		}
		else
		{
			/*******************************************************************'
            ' BADGE, REWARD, PACKAGE '
            '******************************************************************'

            '******************************************************************'
            ' Associate Badge or Reward or Package with User
            '******************************************************************'*/
			$badge_data = array();
            $badge_data["userid"] = $userid;
			$badge_data["badge_id"] = $badge_info[0]->id;
            switch($badge_info[0]->type)
			{
				case '1':
				    // type : badge
                   $badge_data["type"] = 1;
				break;
				case '2':
				   // type : reward
                   $badge_data["type"] = 2;
				break;
				case '6':
				   // type : package
                   $badge_data["type"] = 3;
				break;
			}
			$badge_data["added_date"] = date("Y-m-d H:i:s");
            $uobj = new ga_user_badges_bll();
			
			// check whether user already award badge, if not marketd as multiple (award multiple times)
			if($badge_info[0]->ismultiple == 1)
			{
				$addNotification = true;
			    // award multiple times
				if(!$uobj->check(array('userid' => $userid, 'badge_id' => $badge_info[0]->id)))
				{
					$uobj->add($badge_data);
				}
				else
				{
					// update occurences of existing awarded badge if exist
					$current_badge_query = new ga_user_badges_query();
					$current_badge_query->badge_id = $badge_info[0]->id;
					$current_badge_query->userid = $userid;
	                $current_badge_obj = new ga_user_badges_bll();
					$current_badge_info = $current_badge_obj->fetch_records($current_badge_query);
					if(count($current_badge_info) > 0)
					{
						$repeated_badge = $current_badge_info[0]->repeated;
						$repeated_badge = $repeated_badge + 1;
						$current_badge_obj->update(array("repeated" => $repeated_badge), array('userid' => $userid, 'badge_id' => $badge_info[0]->id));
					}
  			    }
				// process physical code related to selected reward.
				$this->call_phycical_function($badge_info[0]->type, $badge_info[0]->id, $userid);
			} 
			else
			{
				// award single time
				if(!$uobj->check(array('userid' => $userid, 'badge_id' => $badge_info[0]->id)))
				{
					$uobj->add($badge_data);
					// process physical code related to selected reward.
					$this->call_phycical_function($badge_info[0]->type, $badge_info[0]->id, $userid);
					$addNotification = true;
				}
			}
			
			if($badge_info[0]->type == '6')
			{
				// package, credit package allocated credits to user
				$currentcredits = $user_info[0]->credits;
				$currentcredits = $currentcredits + $badge_info[0]->credits;
				$gobj = new ga_user_levels_bll();
			    $gobj->update(array("credits" => $currentcredits), array("userid" => $userid));
				$addNotification = true;
			}
		}
		/*******************************************************************'
        ' Update User Achievements / History
        '******************************************************************'*/
		if($addNotification)
		{
			if($badge_info[0]->notification != "") 
			{
				$user_history_data = array();
				$value = "";
				switch($badge_info[0]->type)
				{
					 case '1':
					 // type: badge
					 $value = $badge_info[0]->title; // ' badge name as value'
					 break;
					 case '2':
					 // type: reward
					 $value = $badge_info[0]->title; // ' reward name as value'
					 break;
					 case '3':
					 // type level
					 $value = $badge_info[0]->ilevel; // ' level ilevel as value'
					 break;
					 case '4':
					 // type points
					 $value = $badge_info[0]->xp; // ' xp as point value'
					 break;
					 case '5':
					 // type credits
					  $value = $badge_info[0]->credits; // ' credits as value'
					 break;
					 case '6':
					 // type package
					  $value = $badge_info[0]->title; // ' packages as title'
					 break;
				}
				
				$user_history_data["userid"] = $userid;
				$user_history_data["description"] = preg_replace("/\[value\]/", $value, $badge_info[0]->notification);
				$user_history_data["added_date"] = date("Y-m-d H:i:s");
				$user_history_data["type"] = $badge_info[0]->type;
				$arc = new ga_user_achievements_bll();
				$arc->add($user_history_data);
			}
		}
		
		
        /*'******************************************************************'
        ' Process Completed
        '******************************************************************'*/
        return true;
  }
  
  private function call_phycical_function($type, $rewardid, $userid) {
	  if($type == 2)
	  {
			// unlocked reward
			// call physical feature to process user own code for selected reward.
			$physical_features = new process_reward_features();
			$physical_features->process($rewardid, $userid);
	  }
  }
}

?>