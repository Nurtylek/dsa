class TrieNode {
    constructor() {
        this.isEnd = false;
        this.children = new Map();
    }
}

var WordDictionary = function() {
    this.root = new TrieNode();
};

/** 
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function(word) {
    let root = this.root;

    for (const char of word) {
        if (!root.children.has(char)) {
            root.children.set(char, new TrieNode())
        }
        root = root.children.get(char);
    }

    root.isEnd = true;
};

/** 
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function(word) {

    function dfs(index, node) {
        let curr = node;

        if (!node) return false;

        if (index === word.length) return node.isEnd; 

        for (; index < word.length; index++) {
            const char = word[index];

            if (char === ".") {

                for (const child of curr.children.values()) {
                    if (dfs(index + 1, child)) return true
                }
                return false

            } else {
                if (!curr.children.has(char)) {
                    curr.children.set(char, new TrieNode());
                }
                curr = curr.children.get(char);
            }
        }

        return curr.isEnd;
    }

    return dfs(0, this.root)
};

/** 
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */
