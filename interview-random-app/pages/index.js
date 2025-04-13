import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Select, SelectTrigger, SelectContent, SelectItem } from "@/components/ui/select";

const questionData = {
  "항공사": {
    "기업이해": ["대한항공을 사랑하는 이유에 대해 설명해주십시오", "꼭 대한항공이어야 하는 이유는 무엇입니까?", "대한항공과 본인의 닮은 점은 무엇이라고 생각하십니까?"],
    "이미지/브랜드": ["한진 하면 생각나는 것은 무엇입니까?", "대한항공 슬로건을 새롭게 만들어 주십시오", "대한항공 광고/홈페이지를 보고 느낀 점과 개선할 점을 말씀해주십시오"]
  },
  "승무원/서비스": {
    "지원동기": ["언제부터 객실승무원을 꿈꿨는지 말씀해 주십시오", "승무원에 언제까지 도전할 생각이십니까?"],
    "기내서비스": ["승무원이 된다면 가장 해보고 싶은 서비스는 무엇입니까?", "기내 AVOD에 추천하고 싶은 컨텐츠(영화/예능 등)는 무엇입니까?"]
  },
  "개인관련": {
    "성격/가치관": ["자신의 장단점은 무엇입니까?", "자신이 가장 소중하게 생각하는 것은 무엇입니까?"],
    "가족/관계": ["가장 소중한 사람은 누구입니까?", "부모님께 본인은 어떤 딸인지 말씀해주십시오"]
  },
  "개인의견": {
    "사회관/철학": ["행복이란 무엇이라고 생각하십니까?", "사는 이유는 무엇입니까?"],
    "시사/상황대처": ["층간소음으로 윗집이 너무 시끄러우면 어떻게 할 것인지 말씀해주십시오", "북한과 사이가 좋아지면 항공업계는 어떻게 될까요?"]
  }
};

export default function RandomInterviewApp() {
  const [category, setCategory] = useState("항공사");
  const [subCategory, setSubCategory] = useState("기업이해");
  const [question, setQuestion] = useState("");

  const getRandomQuestion = () => {
    const selected = questionData[category][subCategory];
    const randomIndex = Math.floor(Math.random() * selected.length);
    setQuestion(selected[randomIndex]);
  };

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4 text-center">면접 질문 랜덤 앱</h1>

      <Select onValueChange={(val) => { setCategory(val); setSubCategory(Object.keys(questionData[val])[0]); }} defaultValue={category}>
        <SelectTrigger className="mb-2">
          <span>{category}</span>
        </SelectTrigger>
        <SelectContent>
          {Object.keys(questionData).map((cat) => (
            <SelectItem key={cat} value={cat}>{cat}</SelectItem>
          ))}
        </SelectContent>
      </Select>

      <Select onValueChange={(val) => setSubCategory(val)} defaultValue={subCategory}>
        <SelectTrigger className="mb-4">
          <span>{subCategory}</span>
        </SelectTrigger>
        <SelectContent>
          {Object.keys(questionData[category]).map((sub) => (
            <SelectItem key={sub} value={sub}>{sub}</SelectItem>
          ))}
        </SelectContent>
      </Select>

      <Button className="w-full mb-4" onClick={getRandomQuestion}>
        랜덤 질문 보기
      </Button>

      {question && (
        <Card className="mb-4">
          <CardContent className="p-6 text-center text-lg font-medium">
            {question}
          </CardContent>
        </Card>
      )}
    </div>
  );
}
