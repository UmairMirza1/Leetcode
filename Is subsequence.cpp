class Solution {
public:
    bool isSubsequence(string s, string t) {
        
        int index=0;
        if(s.length()==0){return true;}
        
        for ( int i =0 ; i < t.length(); i++)
        {   
            char match= s[index];
            if (match == t[i])
            {
                index++;
            }
        
        }
        if (index==s.length())
            {return true;}
        return false;
    }
};
