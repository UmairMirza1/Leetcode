/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode() : val(0), next(nullptr) {}
 *     ListNode(int x) : val(x), next(nullptr) {}
 *     ListNode(int x, ListNode *next) : val(x), next(next) {}
 * };
 */
class Solution {
public:
    ListNode* deleteMiddle(ListNode* head) {
      if ( !head) return head;
      if(!head->next) return head->next;
   //   if ( !head->next) return 
        if(!head->next->next)
        {
            head->next=NULL;
            return head;
        }
        ListNode * prev= NULL;
        ListNode * Fp= head;
        ListNode * Sp = head->next;

        while( Sp && Sp->next)
        {   
            prev=Fp;
            Fp= Fp->next;
            
            Sp= Sp->next->next;
        }
        // for the even number case 
        if( Sp &&  !Sp->next) { 
            prev=Fp;
            Fp=Fp->next;}
        // Fp is the middle 
        prev->next=Fp->next;
        //delete Fp;
        return head;

        
    }
};
