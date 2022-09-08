#include <iostream>
#include <bits/std++.h>

int main()
{
    int arr[]={4,9,5,3,2,10};
    int n;
    int arr2[];
    int count;

    cin>>n;
    for(int i=0;i<n;i++){
        for(int j=i;j>0;j--){
            if(arr[i]<arr[j]){
                 arr2[i]=0;
            }
            else
            {
                count++;
                arr2[i]=count;
            }

        }
    }
    cout<<arr2;

    // return arr2;
    
}