//https://leetcode.com/problems/middle-of-the-linked-list/submissions/875956699/?envType=study-plan&id=level-1


// Runtime beats 100%
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
    ListNode* middleNode(ListNode* head) {
        if(!head) return NULL;
        if(!head->next) return head;
        
        ListNode * firstP= head;
        ListNode * secondP = head->next;

        while(secondP && secondP->next)
        {
            firstP= firstP->next;
           // if (!secondP->next->next){ break;}
            secondP = secondP->next->next;
        }
        if(secondP && !secondP->next) return firstP->next;
        return firstP;
    }
};
