var MagicDictionary = function() {
    this.map = new Map();
    };
    
    /** 
     * @param {string[]} dictionary
     * @return {void}
     */
    MagicDictionary.prototype.buildDict = function(dictionary) {
     for (let str of dictionary) {
            let len = str.length;
            if (this.map.has(len)) {
                let arr = this.map.get(len);
                arr.push(str);
                this.map.set(len, arr);
            } else {
                this.map.set(len, [str]);
            }
        }
    
    };
    
    /** 
     * @param {string} searchWord
     * @return {boolean}
     */
    MagicDictionary.prototype.search = function(searchWord) {
       let len = searchWord.length;
        // 只遍历map中key为len的字符串列表
        if (this.map.has(len)) {
            for (let str of this.map.get(len)) {
                // 两字符串相等直接跳过
                if (str === searchWord) {
                    continue;
                }
                // 统计差异差异字符串数量
                let different = 0
                for (let i = 0; i < len; i++) {
                    if (str[i] !== searchWord[i]) {
                        different++;
                    }
                    // 差异字符串数量大于2直接结束统计
                    if (different >= 2) {
                        break;
                    }
                }
                // 差异字符串数量等于1返回true
                if (different === 1) {
                    return true;
                }   
            }
            return false;
        } else {
            return false;
        }
    };
    
    /**
     * Your MagicDictionary object will be instantiated and called as such:
     * var obj = new MagicDictionary()
     * obj.buildDict(dictionary)
     * var param_2 = obj.search(searchWord)
     */