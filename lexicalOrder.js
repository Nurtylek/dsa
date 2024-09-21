class TrieNode {
    constructor() {
        this.isWord = false;
        this.children = new Map();
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode()
    }

    insert(word) {
        let root = this.root;
        for (const char of word) {
            if (!root.children.has(char)) {
                root.children.set(char, new TrieNode())
            }
            root = root.children.get(char);
        }
        root.isWord = true
    }

    lexicalOrder() {
        const res = [];
        this.dfs(this.root, "", res);
        return res;
    }

    dfs(node, path, result) {
        if (node.isWord) {
            result.push(+path)
        }

        for (const [char, childNode] of node.children) {
            this.dfs(childNode, path + char, result)
        }
    }
}

/**
 * @param {number} n
 * @return {number[]}
 */
var lexicalOrder = function(n) {
    const trie = new Trie();

    for (let i = 1; i <= n; i++) {
        trie.insert(i.toString());
    }

    return trie.lexicalOrder();
};
