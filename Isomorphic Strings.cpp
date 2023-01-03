#define _CRT_SECURE_NO_WARNINGS

#include <bits/stdc++.h>
using namespace std;
class Solution
{
public:
    bool isIsomorphic(string s, string t)
    {
        std::map<char, char> mymap;

        for (int i = 0; i < s.length(); i++)
        {
            char c1 = s[i];
            char c2 = t[i];
            if (mymap.find(c1) == mymap.end())
            {
                mymap[c1] = c2;
            }
            else
            {
                if (mymap[c1] != c2)
                {
                    return false;
                }
            }
        }
        return true;
    }
};

int main()
{

    Solution s;
    cout << s.isIsomorphic("egg", "add");

    return 0;
}