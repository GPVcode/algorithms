class Search{
    public:
        void binarySearch(int target = 5){
            int left = 0;
            int right = numsArr.size();
            while(left <= right){
                int mid = (left + mid) / 2;
                if(nums[mid] == target){
                    return mid;
                } else if(nums[mid] < target){
                    left = mid + 1;
                } else {
                    right = mid + 1
                }
            }
            return -1;
        }
}