/**
 * Encodes a URL to a shortened URL.
 *
 * @param {string} longUrl
 * @return {string}
 */
 const long2short=new Map(),short2long=new Map();
 const base = 'https://leetcode.com/problems/';
 var encode = function(longUrl) {
     const str='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789',n=str.length,m=longUrl.length;
  while(!long2short.has(longUrl)){
      let code=base;
      for(let i=0;i<m;i++){
          code+=str[Math.floor(Math.random()*(n+1))];
      }
      if(short2long.has(code))continue;
      else {
          long2short.set(longUrl,code);
          short2long.set(code,longUrl);
      }
  }
     return long2short.get(longUrl);
 };
 
 /**
  * Decodes a shortened URL to its original URL.
  *
  * @param {string} shortUrl
  * @return {string}
  */
 var decode = function(shortUrl) {
     return short2long.get(shortUrl);
 };
 
 /**
  * Your functions will be called as such:
  * decode(encode(url));
  */