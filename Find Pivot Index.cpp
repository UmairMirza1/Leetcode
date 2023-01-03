class Solution {
public:

    int calculateLeftSum(int index ,const vector<int>& nums){
        if (index==0){return 0;}
        
        int sum =0;        
        for(  int i =0 ; i < index ; i++){
            sum +=nums[i];
        }
        
        return sum;
    }
    int calculateRightSum(int index ,const vector<int>& nums){
        if(index==nums.size()-1){return 0;}
        //cout <<"im here r";
        int sum=0;
        for (int i =index+1 ; i< nums.size(); i++){
                sum += nums[i];

        }

        return sum; 
    }
    
    int  totalSum(const vector<int> & nums ){



    }
    
    int pivotIndex(vector<int>& nums) {
        
        
        for (int i =0 ; i<nums.size() ;i++){

        if(calculateLeftSum(i,nums )==calculateRightSum(i,nums ))
            return i ;
        }
        
        return -1;
    }
};