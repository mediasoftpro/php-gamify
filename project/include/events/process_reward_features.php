<?php
  /***************************************************************************************/
  // CORE PAGE: Where you can add custom code for each reward to unlock physical features,
  // like increasing bid levels, increasing discount on certain reward etc
  //**************************************************************************************/
  class process_reward_features {
     /***********************************
     --> Please don't change the name of function
     ************************************/
     function process($reward_id, $userid) {
        switch($reward_id) {
           
           /*********************************
           -> Unlock -> Level 5 Reward 3
           -> +2 Skills for your profile
           **********************************/
           case 32:
              /* Put your custom code here associated with Level 5 Reward 3 reward. */
              break;
          
           /*********************************
           -> Unlock -> Level 5 Reward 2
           -> +2.5% Faster bid refresh rate
           **********************************/
           case 31:
              /* Put your custom code here associated with Level 5 Reward 2 reward. */
              break;
          
           /*********************************
           -> Unlock -> Level 5 Reward 1
           -> +1 Extra bids per month
           **********************************/
           case 30:
              /* Put your custom code here associated with Level 5 Reward 1 reward. */
              break;
          
           /*********************************
           -> Unlock -> Skills
           -> Increase the total number of skills allowed for your profile
           **********************************/
           case 19:
              /* Put your custom code here associated with Skills reward. */
              break;
          
           /*********************************
           -> Unlock -> Bids
           -> Increase the number of bids you received per month.
           **********************************/
           case 18:
              /* Put your custom code here associated with Bids reward. */
              break;
          
           /*********************************
           -> Unlock -> The Network Slot
           -> Increase the number of network slots in your contact list.
           **********************************/
           case 17:
              /* Put your custom code here associated with The Network Slot reward. */
              break;
          
        }
     }
  }
?>