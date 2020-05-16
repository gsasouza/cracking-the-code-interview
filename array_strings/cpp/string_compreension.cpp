#include <bits/stdc++.h>

using namespace std;

string string_compression(string s) {
    string ns = "";
    int i;
    int repetido = 1;
    for(i = 0; i < s.size() - 1; i++) {
        if(s[i] == s[i+1]) repetido++;
        else {
            ns.push_back(s[i]);
            ns.push_back('0'+repetido);
            repetido = 1;
        }
    }

    ns.push_back(s[i]);
    ns.push_back('0'+repetido);
    if (ns.size() >= s.size()) return s;
    else return ns;
}

int main() {

    string s;
    cin >> s;
    cout << string_compression(s);
    return 0;
}