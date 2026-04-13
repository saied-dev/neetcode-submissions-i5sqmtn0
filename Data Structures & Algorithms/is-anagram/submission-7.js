class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length) return false
        let sCount = {}
        let tCount = {}

        for(let i in s ){
            sCount[s[i]] = (sCount[s[i]]||0) +1
            tCount[t[i]] = (tCount[t[i]]||0) +1

        }

        for(let c in sCount){
            if(sCount[c] !== tCount[c]) return false
        }
        return true
    }
}
