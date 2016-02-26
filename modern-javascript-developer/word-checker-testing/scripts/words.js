// should return false if a string sent to it has more than 100 words in it
function checkWordCount(str) {
    if (str.split(' ').length > 100) {
        return false;    
    } else {
        console.log("str:", str);
    }
};
var longStr = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque aliquam, ex id congue finibus, ex mauris dignissim ante, volutpat pharetra lectus erat eu arcu. Vivamus vel nunc sed ligula vulputate semper at et purus. Sed ac nisl quis odio elementum consectetur sed ut leo. Praesent non efficitur justo, vitae suscipit ligula. Proin tristique vulputate lacus eu facilisis. Duis in imperdiet tellus, eu ullamcorper justo. Interdum et malesuada fames ac ante ipsum primis in faucibus. Proin ut sagittis quam, a sagittis augue. Mauris vitae pellentesque nulla. Morbi nibh metus, luctus quis quam convallis, convallis tristique orci. Nunc ut ex at risus feugiat lacinia. Pellentesque habitant morbi.";
checkWordCount(longStr);
checkWordCount("Hello there Erin");


function duplicateCheck(string) {
    // ?????? this does not work
    var uniqueListIndex = string.split(',').filter(function(currentItem,i,allItems) {
        if (i == allItems.indexOf(currentItem)) {
            console.log("there were duplicates");;
        } else {
            console.log(string);
        }
    });

    var uniqueList=uniqueListIndex.join(',');
};

duplicateCheck("hi there friend");