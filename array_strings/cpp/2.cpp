#include <iostream>
#include <map>
#include <utility>


/* O(n) */
bool checkPermutationWithHashTable (std::string word, std::string word2) {
  if (word.length() != word2.length()) return false;
  std::map<char,int> hashTable;
  std::map<char,int>::iterator it;
  for(char character : word) {
    it = hashTable.find(character);
    if (it != hashTable.end()) it->second = it->second + 1;
    else hashTable.insert( std::pair<char,int>(character,1) );
  }
  for(char character : word2) {
    it = hashTable.find(character);
    if (it != hashTable.end()) it->second = it->second - 1;
    else return false;
  }
  for(char character : word) {
    it = hashTable.find(character);
    if (it != hashTable.end() && it->second == 0) continue ;
    else return false;
  }
  return true;
}

int main() {
  std::string word = "uniqee";
  std::string word2 = "niquee";
  std::cout << checkPermutationWithHashTable(word, word2);
}