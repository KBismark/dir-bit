/**
 * Asynchronously removes an entire directory. 
 * @param {string} path The path of the directory to remove.
 * @param {(boolean)} callback A callback that is executed after directory is removed. 
 * This callback is passed a boolean as an argument to check if the directory is removed.
 */
function removeDir(path,callback){
    fs.readdir(path,"utf8",(err,f)=>{
        if(err){
            if(typeof (callback)==="function"){callback(false);}
            return;
        }
        delFiless(path,f,0,(arr)=>{
            delDirs(path,arr,0,(del)=>{
                fs.rmdir(path,(e)=>{
                    if(e){};
                    if(typeof (callback)==="function"){callback(true);}
                });
            });
        },[]);
        
    });
};
function _delD(path,fileArr,start,callback){delDirs(path,fileArr,start,callback);};
 function delDirs(path,fileArr,start,callback){
     if(start<fileArr.length){
         removeDir(path+"/"+fileArr[start],(del)=>{
            _delD(path,fileArr,start+1,callback);
         });
     }else{
        callback(true);
     }
 };
function _delFss(path,fileArr,start,callback,arr){delFiless(path,fileArr,start,callback,arr);};
 function delFiless(path,fileArr,start,callback,arr){
     if(start<fileArr.length){
        fs.unlink(path+"/"+fileArr[start],(err)=>{
            if(err){
                arr.push(fileArr[start]);
            }
            _delFss(path,fileArr,start+1,callback,arr);
        });
     }else{
        callback(arr);
     }
 };
 function _delFs(path,fileArr,start,callback){delFiles(path,fileArr,start,callback);};
 
 /**
  * Asynchronously deletes files in a directory.
  * @param {string} path The path to the directory where files are to be deleted.
  * @param {string[]} fileArr An array of files to delete. Deletes only files that exist in the directory.
  * @param {()=>void} callback An `optional` callback that is executed after files are deleted.
  */
  function _delf(path,fileArr,callback){delFiles(path,fileArr,0,callback)};
 function delFiles(path,fileArr,start,callback){
     if(start<fileArr.length){
        fs.unlink(path+"/"+fileArr[start],(err)=>{
            if(err){}
            _delFs(path,fileArr,start+1,callback);
        });
     }else{
         if(typeof (callback)==="function"){
             callback();
         }
     }
 };
 /**
  * 
  * @param {object} new_fs `fs` module overriding object.
  */
 function o(new_fs){fs=new_fs}
 module.exports = {deleteFiles:_delf,removeDir:removeDir,overidefs:o};

