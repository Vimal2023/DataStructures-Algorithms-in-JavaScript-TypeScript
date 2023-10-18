class Solution {
    minJumps(arr,n){
       
        let currentCoverage = 0
        let lastJump = 0
        let jumps =0
        
        for(let i =0;i<n;i++){
            
            currentCoverage = Math.max(currentCoverage,i+arr[i])
            
            if(i===lastJump){
                jumps++;
                lastJump= currentCoverage
                if(currentCoverage>=n-1) return jumps
            }
        }
        return -1
    }
}
