<?php
class utility {

	// (?:[^a-z0-9 ]|(?<=['\"])s) // This method will removed everything but letters, numbers and spaces
	// strip special chars and replace space with underscore
	function replacespacewithunderscore($input)
    {
        // replace all  spaces with underscrore
        $str = preg_replace("/\s/", "_", $input); 
        // remove special characters
        return preg_replace("/[^0-9a-zA-Z_]+/", "", $str); 
    }
	
	// strip special chars and replace space with hyphin
	function replacespacewithhyphin($input)
    {
        // replace all  spaces with hyphin
        $str = preg_replace("/\s/", "-", $input); 
		$str = preg_replace("/[\-]+/", "-", $str); 
        // remove special characters
        return preg_replace("/[^0-9a-zA-Z-_]+/", "", $str); 
		//return preg_replace("/[^\w\._]+/","",$str);
    } 
	
	// strip special chars and replace space with hyphin (also allow (.) dot)
	function replacespacewithhyphin_v2($input)
    {
        // replace all  spaces with hyphin
        $str = preg_replace("/\s/", "-", $input); 
		$str = preg_replace("/[\-]+/", "-", $str); 
        // remove special characters
        return preg_replace("/[^0-9a-zA-Z-._]+/", "", $str); 
		//return preg_replace("/[^\w\._]+/","",$str);
    } 
	
	// replace hyphin with space (reverse)
	function replacehyphinwithspace($input)
    {
         return preg_replace("/[\-]/", " ", $input); 
    }
  
    // strip special chars (allow . - _)
	function strip_special_characters($input)
	{
		return preg_replace("/[^0-9a-zA-Z-._]+/", "", $input);
	}
	
	// strip search characters
	function strip_search_characters($input)
	{
		return preg_replace("/[^0-9a-zA-Z-._]+/", "", $input);
	}
     
	// strip rss characters
	function strip_rss_feed_characters($input)
	{
		return preg_replace("/nbsp|amp/", " ", $input);
	}
	
	// add nofollow attribute with hyperlink
	function add_nofollow($input)
	{
		return preg_replace("/<a/", "<a rel='nofollow'", $input);
	}
	
	// add pagenumber
	function add_pagenumber($input, $value)
	{
		return preg_replace("/\[p\]/", $value, $input);
	}
	
	// strip html
	function striphtml($input)
	{
		/*$pattern = "</?(?i:script|embed|object|font|div|span|p|frameset|frame|iframe|meta|link|style)(.|\n)*?>";
		$input = preg_replace("/" . $pattern . "/", "", $input);
		return preg_replace("/<[^>]+>/", "", $input); */
		$search = array('@<script[^>]*?>.*?</script>@si',  // Strip out javascript 
               '@<[\/\!]*?[^<>]*?>@si',            // Strip out HTML tags 
               '@<style[^>]*?>.*?</style>@siU',    // Strip style tags properly 
               '@<![\s\S]*?--[ \t\n\r]*>@'         // Strip multi-line comments including CDATA 
       ); 
       $input = preg_replace($search, '', $input); 
       return $input; 
	}
		
	// strip html except p
	function striphtml_v2($input)
	{
		$pattern = "</?(?i:script|font|span|frameset|frame|iframe|meta|link|style)(.|\n)*?>";
		return preg_replace("/" . $pattern . "/", "", $input);
	}
	
	// strip every type of html except <a>
	function striphtml_v3($input)
	{
		$pattern = "<(?!\/?a(?=>|\s.*>))\/?.*?>";
		return preg_replace("/" . $pattern . "/", "", $input);
	}
	
	// strip every type of html except <a> and <p>
	function striphtml_v4($input)
	{
		$pattern = "<(?!\/?(a|p)(?=>|\s.*>))\/?.*?>";
		return preg_replace("/" . $pattern . "/", "", $input);
	}
	
	function strip_cdata($string) 
	{ 
		preg_match_all('/<!\[cdata\[(.*?)\]\]>/is', $string, $matches); 
		return str_replace($matches[0], $matches[1], $string); 
	} 
    
	// clean blog html
	function cleanbloghtml($input)
	{
		$input = preg_replace("/<(.|\n)*?>/", "", $input); // remove <.... >
		$input = preg_replace("~\[(\w)+\](.+)\[/(\w)+\]~", "", $input);  // remove bbcode e.g [abc]...[/abc]
		return utility::striphtml_v2($intput); // remove rest of special chars except p

	}
    // clean search terms
    function cleansearchterm($input)
	{
		$input = preg_replace("/<(.|\n)*?>/", "", $input); // remove <.... >
		$input = preg_replace("~\[(\w)+\](.+)\[/(\w)+\]~", "", $input);  // remove bbcode e.g [abc]...[/abc]
		return utility::striphtml($intput); // remove rest of special chars

	}
	
	// fetch image from html
	function fetchimages($html)
	{
		$arr = array();
	    $pattern = "~(?<imageurl>http://([a-zA-Z0-9.\/\\_\-\+]+)?.jpg)~";
	    preg_match_all($pattern,$html,$matches);
	    foreach($matches["imageurl"] as $matche) 
	       $arr[] = $matche;
	 
	    return $arr;
	}
	
	// replace term with url
    function replaceterm($html, $term, $url)
	{
		return preg_replace("/" . $term . "/", $url, $html); 
	}
  
	// remove images
	function removeimages($input)
	{
		$pattern = "</?(?i:img)(.|\n)*?>";
		return preg_replace("/" . $pattern . "/", "", $input);
	}
	
	function isdigit($input)
	{
		if (preg_match("/(\d+)/", $input, $matches))
           return true;
		else
		   return false;
	}
	
	function validateurl($url)
	{
		if (preg_match("~(http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?~", $url, $matches))
           return true;
		else
		   return false;
	}

	// utility function which will extract all jpeg from html
	function extract_jpegs($html)
	{
		$pattern = "/<img[^>]+>|<a[^>]+>/";
        preg_match_all($pattern,$html,$matches);
		return $matches[0];
	}

	// calculate difference between two dates
	// usage: $utility->dateDiff("now", "now -6 year -2 months -10 days",1)
	function dateDiff($time1, $time2, $precision = 6) 
	{
		// If not numeric then convert texts to unix timestamps
		if (!is_int($time1)) {
		  $time1 = strtotime($time1);
		}
		if (!is_int($time2)) {
		  $time2 = strtotime($time2);
		}
 
		// If time1 is bigger than time2
		// Then swap time1 and time2
		if ($time1 > $time2) {
		  $ttime = $time1;
		  $time1 = $time2;
		  $time2 = $ttime;
		}
 
		// Set up intervals and diffs arrays
		$intervals = array('year','month','day','hour','minute','second');
		$diffs = array();
 
		// Loop thru all intervals
		foreach ($intervals as $interval) 
		{
		  // Set default diff to 0
		  $diffs[$interval] = 0;
		  // Create temp time from time1 and interval
		  $ttime = strtotime("+1 " . $interval, $time1);
		  // Loop until temp time is smaller than time2
		  while ($time2 >= $ttime) 
		  {
			$time1 = $ttime;
			$diffs[$interval]++;
			// Create new temp time from time1 and interval
			$ttime = strtotime("+1 " . $interval, $time1);
		  }
		}
 
		$count = 0;
		$times = array();
		// Loop thru all diffs
		foreach ($diffs as $interval => $value) 
		{
		  // Break if we have needed precission
		  if ($count >= $precision) {
			break;
		  }
		  // Add value and interval 
		  // if value is bigger than 0
		  if ($value > 0) 
		  {
			// Add s if value is not 1
			if ($value != 1) {
			  $interval .= "s";
			}
		// Add value and interval to times array
		$times[] = $value . " " . $interval;
		$count++;
		}
    }
 
    // Return string with times
    return implode(", ", $times);
  }
  
   // return date differs in days
   function getdatediff($startdate, $enddate) 
   {
	   $output = utility::dateDiff($startdate, $enddate);
	   $arr  = explode(",", $output);
	   $days = 0;
	   if(count($arr)>0)
	   {
		   if (strpos($arr[0], "years") !== false)
	       {
			   $days = $arr[0]*365;
			   if (strpos($arr[1], "months") !== false)
			   {
				   $months = $arr[1]*31;
				   $days = $days + $months;
				   if (strpos($arr[2], "days") !== false)
				   {
					   $days = $days + $arr[2];
				   }
			   }
		   }
		   else if (strpos($arr[0], "months") !== false)
		   {
			   $days = $arr[0]*31;
			   if (strpos($arr[1], "days") !== false)
			   {
				   $days = $days + $arr[1];
			   }
		   }
		   else if (strpos($arr[0], "days") !== false)
		   {
			    $days = $days + $arr[0];
		   }
	   }
	   return $days;
   }
  // customize timespace / duration
  function customize_duration($duration)
  {
	 //return strtotime($duration) - strtotime('TODAY'); // 3600
	 $pattern = "/((?<hr>([0-9]+))?:(?<min>([0-9]+))?:(?<sec>([0-9.]+)))/";
	 preg_match($pattern,$duration,$matches);
	 $hour = $matches['hr'];
	 $mins = $matches['min'];
	 $secs = $matches['sec'];
	 $customduration = $mins . ":" . $secs;
	 if($hour != "")
	 {
		 if($hour > 0)
		   $customduration = $hour . ":" . $customduration;
	 }
	 return $customduration;
   }
   
   // fix html code
   function fixcode($html)
   {
	    $html = preg_replace("/\s/", "&nbsp;", $html); 
		$html = preg_replace("/\t/", "&nbsp;&nbsp;&nbsp;", $html); 
		$html = preg_replace("/[/", "&#91;;", $html); 
		$html = preg_replace("/\]/", "&#93;", $html); 
		$html = preg_replace("/</", "&lt;", $html);
		$html = preg_replace("/>/", "&gt;", $html); 
		$html = nl2br($html); 
				
		// href 
		$html = utility::generatelinks($html);
		return $html;
   }
   
   function compresscode($html)
   {
	    //$html = preg_replace("/\s/", "&nbsp;", $html); 
		//$html = preg_replace("/\t/", "&nbsp;&nbsp;&nbsp;", $html); 
		$html = nl2br($html); 
		$html = trim(preg_replace('/\s+/', '', $html));
		return $html;
   }
   
    
   function decompresscode($html)
   {
	    $html = preg_replace("~<br \/>~", "\n", $html); 
		
		return $html;
   }
   
   // fetch gallery id
  function fetch_gallery_id($html)
  {
	 $arr = array();
	 $pattern = "~\[GID\](?<inner>(.*?))\[/GID\]~";
	 preg_match_all($pattern,$html,$matches);
	 foreach($matches["inner"] as $matche) 
	    $arr[] = $matche;
	 
	 return $arr;
   }
   
   // uppercase first chacter of word
   function uppercasefirst($text, $isall)
   {
	   if($isall)
	     return ucwords(strtolower($text));
	   else
	     return ucfirst(strtolower($text));
   }
   
   function generate_date($date, $formatid)
   {
	   $dateoutput = "";
	   switch ($formatid)
       {
           case 0:
                // 0:  21 May, 2011
                $dateoutput = date('d M, Y', strtotime($date));
                break;
           case 1:
                // 1: May 30th, 2011
                $dateoutput = date('M d, Y', strtotime($date));
                break;
			case 2:
                // 1: May 30th, 2011
                $dateoutput = date('M d, Y', strtotime($date));
                break;
            case 3:
                // 3: 2 days ago 
                $dateoutput = utility::dateDiff('now',$date,1) . " ago";
                break;
            case 4:
                // Today 10:54 PM
                $dateoutput = utility::get_day_name($date) . date('M h:i A', strtotime($date));
                break;
        }
        return $dateoutput;
   }
   
   function get_day_name($date) 
   {
		$date = date('d/m/Y', strtotime($date));
		if($date == date('d/m/Y')) {
		  $day_name = 'Today';
		} else if($date == date('d/m/Y',now() - (24 * 60 * 60))) {
		  $day_name = 'Yesterday';
		}
		else {
			$date = date('M d, Y', strtotime($date));
		}
		return $date;
   }
   
    function process_content_text($html)
    {
        // compress code :-> replace \n - <br />
        $html = nl2br($html);
        // process bbcode
        $html = bbcode::process_bbcode($html);
        // prepare urls
        $html = utility::generatelinks($html,true); 
 
        return $html;
    }

    // remove html
    // compress code breaks
    // generate links
    // no bbcode processing
    // used in comments etc processing
    function process_content($html)
    {
        $cmt = utility::striphtml(trim($html));
        if ($cmt == "")
            return "";
        // generate urls
        // fix html code
       // $html = utility::compresscode($html);
       // $html = utility::generatelinks($html,true); 

        return $cmt;
    }
  

	function startsWith($text, $value)
    {
       return !strncmp($text, $value, strlen($value));
    }

    function endsWith($text, $value)
    {
        $length = strlen($value);
        if ($length == 0) {
           return true;
        }

      return (substr($text, -$length) === $value);
    }
	
	function lastIndexOf($string,$item)
	{  
		$index=strpos(strrev($string),strrev($item));  
		if ($index){  
			$index=strlen($string)-strlen($item)-$index;  
			return $index;  
		}  
			else  
			return -1;  
	}  
	
	// prepare filename
	function prepareFileName($orgFileName)
	{
	  // Clean the fileName for security reasons
	  $orgFileName = preg_replace('/[^\w\._]+/', '_', $orgFileName);
	  if(strlen($orgFileName) > 40)
	  {
		  $fnameWithoutExtension = preg_replace("/\\.[^.\\s]{3,4}$/", "", $orgFileName);
		  $extension = substr($orgFileName, utility::lastIndexOf($orgFileName,"."));
		  $orgFileName = substr($fnameWithoutExtension, 0 , 40) . '' . $extension;
	  }
	  // avoid duplication
      return mt_rand(0,mt_getrandmax()) . "_" .$orgFileName;
	}

 }
?>