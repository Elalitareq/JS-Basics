
const stringSize = (text) => {
    
    a=text.length
    return(a)
}
const replaceCharacterE = (text) => {
    b=text.replace("e"," ")
    return(b)
}
const concatString = (text1, text2) => {
    c=text1+text2;
    return(c)
}
const showChar5 = (text) => {
    d=text.split("")[4]
    return(d)
}
const showChar9 = (text) => {
    e=text.slice(0,9)
    return(e)
}
const toCapitals = (text) => {
    f=text.toUpperCase()
    return(f)
}
const toLowerCase = (text) => {
    g=text.toLowerCase()
    return(g)
}
const removeSpaces = (text) => {
    h=text.slice(1,-1)
    return(h)
}
const IsString = (text) => {
    if(typeof text==="string"){
    return(true)}
}  

const getExtension = (text) => {
    i=text.split(".").pop()
    return(i)
}
const countSpaces = (text) => {
    j=text.split(" ").length-1
    return(j)
}
const InverseString = (text) => {
    k=text.split("").reverse().join("")
    return(k)
}

const power = (x, y) => {
    l=x
    for(i=1;i<y;i++){
        l*=x
    }
    return(l)
}
const absoluteValue = (num) => {
    if(num<0)(
        num=0-num
    )
    return(num)
}
const absoluteValueArray = (array) => {
    let x=[]
    array.forEach(m => {
     if(m<0){
        m=-m
     }   
     x.push(m)
    });
    return(x)
}
const circleSurface = (radius) => {
    area=3.14*radius*radius
    g=Math.round(area)
    return(g)
}
const hypothenuse = (ab, ac) => {
    o=ab*ab+ac*ac
    bc=Math.sqrt(o)
    return(bc)
}
const BMI = (weight, height) => {
    q=weight/(height*height)
    return(Math.round(q*100)/100)
}

const createLanguagesArray = () => {
    langArray=["Html","CSS","Java","PHP"]
    return(langArray)
}

const createNumbersArray = () => {
    numArray=[]
    for(i=0;i<6;i++){
        numArray.push(i)
    }
    return(numArray)
}

const replaceElement = (languages) => {
    languages[2]="Javascript"
    return(languages)
}

const addElement = (languages) => {
    languages.push("Ruby","Python")
    return(languages)
}

const addNumberElement = (numbers) => {
    numbers.splice(0,0,-2,-1)
    return(numbers)
}

const removeFirst = (languages) => {
    languages.splice(0,1)
    return(languages)
}

const removeLast = (languages) => {
    languages.splice(-1,1)
    return(languages)
}

const convertStrToArr = (social_arr) => {
    s_arr=[]
    social_arr.split(",").forEach(x => {
        s_arr.push(x)
    });
    return(s_arr)
}

const convertArrToStr = (languages) => {
    g=languages.toString()
    return(g)
}

const sortArr = (social_arr) => {
    social_arr.sort()
    return(social_arr)
}

const invertArr = (social_arr) => {
    x=social_arr.reverse()
    return(x)
}