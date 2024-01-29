
### 스크립트 추출(완료)
: Google Cloud의 SpeechTotext AI의 API를 이용해 음성 파일을 업로드하면 대본을 추출해주는 node.js 코드를 작성함.

무료 버전을 사용하고 있어 파일이 60초가 넘으면 사용하지 못하는 문제를 발견해

파일을 60초 단위로 끊어서 입력으로 넣고 결과를 이어 붙이는 형식을 취함.

=> API 정책을 확인한 후, 한 번에 여러 입력을 넣는 것이 가능하다면

코드를 바꿔 더 빠르게 결과를 얻을 수 있을 것으로 예상.



### 키워드 추출(완료)
: Google api의 vertex ai을 이용하여 text dat를 input시 text의 주요키워드 5개를 return받는 기능

사용 모델은 gemini모델을 사용함. 해당 모델은 일반 키워드 추출 모델과 달리 대화형 모델로써,

입력시 원하는 조건을 다양하게 설정이 가능하며 키워드 추출 성능이 매우 높음



### docker mongoDB띄우기
: docker-compose.yml이 있는 keyloud폴더에서 docker-compose up -d 커맨드 입력하면 mongodb실행됨