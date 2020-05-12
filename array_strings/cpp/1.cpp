#include <iostream>
#include <map>
#include <utility>

/* O(n) */
bool isUniqueWithHashTable (std::string word) {
  std::map<char,int> hashTable;
  for(char character : word) {
    auto result = hashTable.emplace(character, 1);
    if (!result.second) return false;
  }
  return true;
}

int main() {
  std::string word = "uniqe";
  std::cout << isUniqueWithHashTable(word);
}