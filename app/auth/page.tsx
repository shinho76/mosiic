'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { insforge } from '@/lib/insforge';

export default function AuthPage() {
  const router = useRouter();
  const [checking, setChecking] = useState(true);
  const [googleLoading, setGoogleLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const checkSession = async () => {
      const { data } = await insforge.auth.getCurrentUser();
      if (data?.user) {
        await syncUser(data.user);
        router.replace('/');
      } else {
        setChecking(false);
      }
    };
    checkSession();
  }, []);

  const syncUser = async (user: { id: string; email: string; profile?: { name?: string; avatar_url?: string } | null }) => {
    const { data: existing } = await insforge.database
      .from('users')
      .select()
      .eq('id', user.id)
      .maybeSingle();

    if (!existing) {
      await insforge.database.from('users').insert({
        id: user.id,
        email: user.email,
        name: user.profile?.name ?? null,
        avatar_url: user.profile?.avatar_url ?? null,
      });
    }
  };

  const handleGoogleLogin = async () => {
    setGoogleLoading(true);
    setError(null);

    const { error } = await insforge.auth.signInWithOAuth({
      provider: 'google',
      redirectTo: `${window.location.origin}/auth`,
    });

    if (error) {
      setError('Google 로그인에 실패했습니다. 다시 시도해주세요.');
      setGoogleLoading(false);
    }
  };

  if (checking) {
    return (
      <div
        className="min-h-screen flex items-center justify-center"
        style={{ backgroundColor: '#202020' }}
      >
        <div className="flex flex-col items-center gap-4">
          <div
            className="w-10 h-10 rounded-full border-2 border-t-transparent animate-spin"
            style={{ borderColor: '#DEE0E2', borderTopColor: 'transparent' }}
          />
          <p className="text-sm" style={{ color: '#DEE0E2', opacity: 0.5 }}>
            세션 확인 중...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div
      className="min-h-screen flex items-center justify-center px-4"
      style={{ backgroundColor: '#202020' }}
    >
      {/* 카드 */}
      <div
        className="w-full max-w-sm rounded-3xl p-8"
        style={{ backgroundColor: '#ECEEF0' }}
      >
        {/* 로고 */}
        <div className="text-center mb-8">
          <p className="text-2xl font-black tracking-tight mb-2" style={{ color: '#202020' }}>
            올로지
          </p>
          <p className="text-sm leading-relaxed" style={{ color: '#202020', opacity: 0.5 }}>
            바이럴 영상을 원클릭으로 만드는<br />AI 서비스
          </p>
        </div>

        {/* 구분선 */}
        <div className="mb-6" style={{ height: '1px', backgroundColor: '#DEE0E2' }} />

        {/* Google 로그인 버튼 */}
        <button
          onClick={handleGoogleLogin}
          disabled={googleLoading}
          className="w-full flex items-center justify-center gap-3 rounded-2xl py-3.5 text-sm font-semibold transition-opacity disabled:opacity-60"
          style={{ backgroundColor: '#202020', color: '#ECEEF0' }}
        >
          {googleLoading ? (
            <>
              <div
                className="w-4 h-4 rounded-full border-2 border-t-transparent animate-spin"
                style={{ borderColor: '#ECEEF0', borderTopColor: 'transparent' }}
              />
              <span>연결 중...</span>
            </>
          ) : (
            <>
              <GoogleIcon />
              <span>Google로 계속하기</span>
            </>
          )}
        </button>

        {/* 에러 메시지 */}
        {error && (
          <p className="mt-3 text-xs text-center" style={{ color: '#202020', opacity: 0.5 }}>
            {error}
          </p>
        )}

        {/* 안내 문구 */}
        <p className="mt-6 text-xs text-center leading-relaxed" style={{ color: '#202020', opacity: 0.4 }}>
          처음 방문이라면 자동으로 가입됩니다.<br />
          계속 진행하면 이용약관에 동의하는 것으로 간주됩니다.
        </p>
      </div>
    </div>
  );
}

function GoogleIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M17.64 9.205c0-.639-.057-1.252-.164-1.841H9v3.481h4.844a4.14 4.14 0 0 1-1.796 2.716v2.259h2.908c1.702-1.567 2.684-3.875 2.684-6.615z"
        fill="#4285F4"
      />
      <path
        d="M9 18c2.43 0 4.467-.806 5.956-2.18l-2.908-2.259c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332A8.997 8.997 0 0 0 9 18z"
        fill="#34A853"
      />
      <path
        d="M3.964 10.71A5.41 5.41 0 0 1 3.682 9c0-.593.102-1.17.282-1.71V4.958H.957A8.996 8.996 0 0 0 0 9c0 1.452.348 2.827.957 4.042l3.007-2.332z"
        fill="#FBBC05"
      />
      <path
        d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0A8.997 8.997 0 0 0 .957 4.958L3.964 7.29C4.672 5.163 6.656 3.58 9 3.58z"
        fill="#EA4335"
      />
    </svg>
  );
}
