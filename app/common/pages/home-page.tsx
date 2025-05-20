import { Button } from "~/common/components/ui/button";

export default function HomePage() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-4xl font-bold mb-4 mt-10">
        KBO 팬페이지에 오신것을 환영합니다
      </h1>
      <p className="text-lg text-white">
        KBO 팬페이지는 대한민국의 프로 야구 팀의 모든 KBO 팬들을 위한
        페이지입니다.
      </p>
      <Button variant="default">Get Started</Button>
      <Button variant="outline">Learn More</Button>
    </div>
  );
}
