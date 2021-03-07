#include<bits/stdc++.h>
using namespace std;

//An efficient O(1) approach 

int main(){
    int n;                                 //Declaring variable N
    cin>>n;                                //Taking input for N
    int arr[n-1],k = 0;                    //Declaring array of size N-1 and a variable k
    for(int i=0;i<n-1;i++){                //Loop to take input values for array
        cin>>arr[i];k+=arr[i];             //Meanwhile calculating sum of array
    }cout<<(n*(n+1)/2-k);                  //Since a number is missing from 1 to N so sum of N numbers - sum of array
    return 0;
}