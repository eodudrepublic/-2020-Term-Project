const express = require('express')
const app = express()
const port = 3000 

app.use(express.static('public'))
//public 폴더 안의 파일 이용

app.get('/', (req, res) => res.send('Hello World!'))
//'/'뒤에 아무것도 없을때 

app.get('/water', function(req,res){
  var request = require('request');
  var url = 'http://apis.data.go.kr/6260000/DrinkableWaterQualityInfoService/getDrinkableWaterQualityInfoAfter2015?serviceKey=mRlycxAG205GV9Ft8kOIFrbVPRU3b5Zn8ZZVGRBnLhwNksdqvdp3id83xgh1VpKWWm7m5ONmmMzo3hWFYSa8Nw%3D%3D&pageNo=1&numOfRows=5&resultType=json&inspecArea=';
  //API 주소

  var inspecArea = req.query.inspecArea;
  //찾을 위치(inspecArea) 값 불러오기

  url = url + encodeURI(inspecArea);
  //한글 치환(이게 안되서 계속 오류가 났었어요 ㅠㅠ)

  var options = {
    'method': 'GET',
    'url': url,
    'headers': {
    }
  };

  request(options, function (error, response) {    //API 데이터 요청
    if (error) throw new Error(error);
    console.log(response.body);
    res.send(response.body);
  });
})

app.get('/Path1', function (req, res) {
        res.send("GET Path1");
    })
app.get('/Path2', function(req,res) {
        res.send("GET Path2 : " + Date());
    })
app.put('/Path1', function (req, res) {
        res.send("PUT Path1");
    })

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))