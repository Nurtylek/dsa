class TrieNode {
    constructor() {
        this.isEnd = false;
        this.children = new Map();
    }
}

var Trie = function() {
    this.root = new TrieNode();
};

/** 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
    let root = this.root;

    for (const char of word) {
        if (!root.children.has(char)) {
            root.children.set(char, new TrieNode())
        }
        root = root.children.get(char)
    }

    root.isEnd = true;
};

/** 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
    let root = this.root;

    for (const char of word) {
        if (!root.children.has(char)) {
            return false
        }
        root = root.children.get(char)
    }

    return root.isEnd;
};

/** 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
    let root = this.root;

    for (const char of prefix) {
        if (!root.children.has(char)) {
            return false
        }
        root = root.children.get(char)
    }

    return true
};

/** 
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
