export default function Home() {
  const features = [
    { icon: "✦", title: "AI 스크립트 생성", desc: "트렌드 분석 기반으로 클릭을 부르는 훅과 스토리라인을 자동으로 만들어냅니다." },
    { icon: "◈", title: "자동 영상 편집", desc: "자막, 전환 효과, BGM까지 플랫폼 최적화 포맷으로 자동 편집됩니다." },
    { icon: "⊕", title: "바이럴 최적화", desc: "해시태그, 썸네일, 업로드 시간까지 AI가 분석해 최대 도달률을 만들어냅니다." },
    { icon: "◎", title: "멀티 플랫폼", desc: "TikTok, 유튜브 쇼츠, 인스타그램 릴스 — 한 번에 모든 플랫폼에 대응합니다." },
    { icon: "⊞", title: "브랜드 일관성", desc: "로고, 색상, 폰트를 한 번 설정하면 모든 영상에 자동 적용됩니다." },
    { icon: "◉", title: "성과 분석", desc: "조회수, 참여율, 팔로워 증가를 실시간으로 추적하고 다음 영상에 반영합니다." },
  ];

  const steps = [
    { num: "01", title: "주제 입력", desc: "만들고 싶은 영상의 주제나 키워드를 간단히 적어주세요." },
    { num: "02", title: "AI 생성", desc: "올로지가 스크립트, 편집, 자막을 23초 안에 완성합니다." },
    { num: "03", title: "바로 업로드", desc: "원하는 플랫폼을 선택하고 원클릭으로 바로 게시합니다." },
  ];

  const testimonials = [
    { name: "김지수", role: "뷰티 크리에이터", text: "하루에 영상 5개 올리는데 전혀 지치지 않아요. 올로지 덕분에 팔로워가 3개월 만에 10배 늘었어요.", growth: "+1,200%" },
    { name: "박민준", role: "스타트업 마케터", text: "기획자 없이 혼자서 주 3개 영상을 운영해요. 조회수는 예전보다 오히려 더 잘 나와요.", growth: "+340%" },
    { name: "이소연", role: "온라인 쇼핑몰 운영", text: "제품 소개 영상 만드는 데 하루를 썼는데 이제 5분이에요. 전환율도 2배 올랐어요.", growth: "+200%" },
  ];

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#ECEEF0", color: "#202020", fontFamily: "system-ui, -apple-system, 'Noto Sans KR', sans-serif" }}>

      {/* 네비게이션 */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 px-6 py-5"
        style={{ backgroundColor: "rgba(236,238,240,0.92)", backdropFilter: "blur(12px)", borderBottom: "1px solid #DEE0E2" }}
      >
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <span className="text-xl font-black tracking-tight" style={{ color: "#202020" }}>올로지</span>
          <div className="hidden md:flex items-center gap-8">
            {["기능", "사용법", "요금제"].map((item) => (
              <a key={item} href="#" className="text-sm font-medium transition-opacity hover:opacity-100" style={{ color: "#202020", opacity: 0.45 }}>
                {item}
              </a>
            ))}
          </div>
          <button
            className="px-5 py-2.5 rounded-full text-sm font-semibold transition-opacity hover:opacity-85"
            style={{ backgroundColor: "#202020", color: "#ECEEF0" }}
          >
            무료로 시작하기
          </button>
        </div>
      </nav>

      {/* 히어로 */}
      <section className="pt-32 pb-24 px-6" style={{ backgroundColor: "#202020" }}>
        <div className="max-w-4xl mx-auto text-center">
          <div
            className="inline-block px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-8"
            style={{ backgroundColor: "#DEE0E2", color: "#202020" }}
          >
            AI 바이럴 영상 제작 서비스
          </div>
          <h1 className="text-5xl md:text-7xl font-black leading-tight tracking-tight mb-8" style={{ color: "#ECEEF0" }}>
            아이디어 하나로<br />
            <span style={{ color: "#DEE0E2" }}>바이럴 영상</span> 완성
          </h1>
          <p className="text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-12" style={{ color: "#DEE0E2", opacity: 0.65 }}>
            올로지는 당신의 아이디어를 단 1번의 클릭으로<br className="hidden md:block" />
            조회수 폭발하는 바이럴 영상으로 변환합니다.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              className="px-8 py-4 rounded-full text-base font-bold transition-opacity hover:opacity-90"
              style={{ backgroundColor: "#ECEEF0", color: "#202020" }}
            >
              지금 바로 만들기 →
            </button>
            <button
              className="px-8 py-4 rounded-full text-base font-medium transition-colors"
              style={{ border: "1px solid rgba(236,238,240,0.25)", color: "#ECEEF0" }}
            >
              데모 영상 보기
            </button>
          </div>
        </div>

        {/* 인터페이스 목업 */}
        <div className="max-w-2xl mx-auto mt-20">
          <div className="rounded-2xl p-2" style={{ backgroundColor: "#DEE0E2" }}>
            <div className="rounded-xl p-6 md:p-8" style={{ backgroundColor: "#1a1a1a", border: "1px solid rgba(255,255,255,0.07)" }}>
              <div className="flex items-center gap-2 mb-6">
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: "#ff5f57" }}></div>
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: "#febc2e" }}></div>
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: "#28c840" }}></div>
              </div>
              <div className="flex flex-col gap-3">
                <div className="rounded-xl p-4" style={{ backgroundColor: "rgba(236,238,240,0.07)" }}>
                  <p className="text-xs mb-2 font-medium" style={{ color: "#DEE0E2", opacity: 0.45 }}>주제 입력</p>
                  <p className="text-sm" style={{ color: "#ECEEF0" }}>"2025년 챌린저스 다이어트 꿀팁 3가지"</p>
                </div>
                <div className="flex gap-2 flex-wrap">
                  {["숏폼", "자막 포함", "배경음악", "TikTok 최적화"].map((tag) => (
                    <span key={tag} className="px-3 py-1 rounded-full text-xs" style={{ backgroundColor: "rgba(222,224,226,0.12)", color: "#DEE0E2" }}>
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="rounded-xl p-4 flex items-center gap-3" style={{ backgroundColor: "#DEE0E2" }}>
                  <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: "#202020" }}>
                    <span className="text-sm font-bold" style={{ color: "#ECEEF0" }}>✓</span>
                  </div>
                  <div>
                    <p className="text-xs font-bold" style={{ color: "#202020" }}>영상 생성 완료</p>
                    <p className="text-xs" style={{ color: "#202020", opacity: 0.55 }}>23초 만에 60초 숏폼 영상 완성</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 통계 바 */}
      <section className="py-10 px-6" style={{ backgroundColor: "#DEE0E2" }}>
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { num: "10만+", label: "생성된 영상" },
              { num: "23초", label: "평균 생성 시간" },
              { num: "89%", label: "평균 완주율" },
              { num: "4.9★", label: "사용자 평점" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-2xl md:text-3xl font-black" style={{ color: "#202020" }}>{stat.num}</p>
                <p className="text-xs mt-1" style={{ color: "#202020", opacity: 0.5 }}>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 기능 */}
      <section id="features" className="py-24 px-6" style={{ backgroundColor: "#ECEEF0" }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs font-bold tracking-widest uppercase mb-4" style={{ color: "#202020", opacity: 0.35 }}>핵심 기능</p>
            <h2 className="text-4xl md:text-5xl font-black" style={{ color: "#202020" }}>
              영상 제작의 모든 것을<br />AI에게 맡기세요
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {features.map((f) => (
              <div key={f.title} className="rounded-2xl p-6" style={{ backgroundColor: "#DEE0E2" }}>
                <p className="text-2xl mb-5" style={{ color: "#202020" }}>{f.icon}</p>
                <h3 className="font-bold text-base mb-2" style={{ color: "#202020" }}>{f.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "#202020", opacity: 0.55 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 사용 방법 */}
      <section id="how" className="py-24 px-6" style={{ backgroundColor: "#202020" }}>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs font-bold tracking-widest uppercase mb-4" style={{ color: "#DEE0E2", opacity: 0.4 }}>사용 방법</p>
            <h2 className="text-4xl md:text-5xl font-black" style={{ color: "#ECEEF0" }}>단 3단계로 끝</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-10">
            {steps.map((s) => (
              <div key={s.num}>
                <p className="text-sm font-black tracking-widest mb-4" style={{ color: "#DEE0E2", opacity: 0.3 }}>{s.num}</p>
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                  style={{ backgroundColor: "#DEE0E2" }}
                >
                  <span className="font-black text-lg" style={{ color: "#202020" }}>{parseInt(s.num)}</span>
                </div>
                <h3 className="text-xl font-bold mb-3" style={{ color: "#ECEEF0" }}>{s.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "#DEE0E2", opacity: 0.55 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 후기 */}
      <section className="py-24 px-6" style={{ backgroundColor: "#ECEEF0" }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs font-bold tracking-widest uppercase mb-4" style={{ color: "#202020", opacity: 0.35 }}>실제 후기</p>
            <h2 className="text-4xl font-black" style={{ color: "#202020" }}>이미 바이럴을 경험한 사람들</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {testimonials.map((t) => (
              <div key={t.name} className="rounded-2xl p-6" style={{ backgroundColor: "#DEE0E2" }}>
                <div className="flex items-center justify-between mb-5">
                  <div>
                    <p className="font-bold text-sm" style={{ color: "#202020" }}>{t.name}</p>
                    <p className="text-xs mt-0.5" style={{ color: "#202020", opacity: 0.45 }}>{t.role}</p>
                  </div>
                  <span className="text-base font-black" style={{ color: "#202020" }}>{t.growth}</span>
                </div>
                <p className="text-sm leading-relaxed" style={{ color: "#202020", opacity: 0.65 }}>"{t.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6" style={{ backgroundColor: "#202020" }}>
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-5" style={{ color: "#ECEEF0" }}>
            첫 영상을<br />지금 만들어보세요
          </h2>
          <p className="text-base leading-relaxed mb-10" style={{ color: "#DEE0E2", opacity: 0.55 }}>
            신용카드 없이 무료로 시작하세요.<br />첫 5개 영상은 완전 무료입니다.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <input
              type="email"
              placeholder="이메일 주소 입력"
              className="px-6 py-4 text-sm outline-none flex-1 max-w-xs"
              style={{
                backgroundColor: "rgba(236,238,240,0.08)",
                border: "1px solid rgba(236,238,240,0.18)",
                color: "#ECEEF0",
                borderRadius: "100px",
              }}
            />
            <button
              className="px-7 py-4 text-sm font-bold whitespace-nowrap transition-opacity hover:opacity-90"
              style={{ backgroundColor: "#ECEEF0", color: "#202020", borderRadius: "100px" }}
            >
              무료로 시작하기 →
            </button>
          </div>
        </div>
      </section>

      {/* 푸터 */}
      <footer className="py-10 px-6" style={{ backgroundColor: "#DEE0E2" }}>
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="text-lg font-black" style={{ color: "#202020" }}>올로지</span>
          <div className="flex gap-6 text-xs" style={{ color: "#202020", opacity: 0.45 }}>
            {["이용약관", "개인정보처리방침", "문의하기"].map((item) => (
              <a key={item} href="#" className="transition-opacity hover:opacity-100">
                {item}
              </a>
            ))}
          </div>
          <p className="text-xs" style={{ color: "#202020", opacity: 0.35 }}>© 2025 올로지. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
