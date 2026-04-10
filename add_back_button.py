#!/usr/bin/env python3
"""
각 Joy 앱 HTML 파일에 뒤로가기 버튼을 자동 삽입하는 스크립트
실행: python3 add_back_button.py
위치: ~/Desktop/Joy/ 에서 실행
"""

import os, re

BACK_CSS = """
<style id="joy-back-btn-style">
  #joy-back {
    position: fixed;
    top: 14px;
    left: 14px;
    z-index: 9999;
    background: #FF6B6B;
    color: #fff;
    border: none;
    border-radius: 99px;
    padding: 10px 20px;
    font-family: 'Gaegu', 'Nanum Gothic', cursive;
    font-size: 1.1rem;
    font-weight: 700;
    cursor: pointer;
    box-shadow: 0 4px 16px rgba(255,107,107,.4);
    display: flex;
    align-items: center;
    gap: 6px;
    transition: transform .18s, box-shadow .18s;
    text-decoration: none;
  }
  #joy-back:hover  { transform: scale(1.07); box-shadow: 0 6px 20px rgba(255,107,107,.5); }
  #joy-back:active { transform: scale(.95); }
</style>
"""

BACK_HTML = """
<a id="joy-back" href="https://drumismylife.github.io/Joy/" title="메인으로 돌아가기">
  🏠 메인
</a>
"""

TARGET_FILES = [
    "Joy_math.html",
    "Joy_plus.html",
    "Joy_word.html",
    "Joy_word2.html",
    "Joy_word3.html",
    "Joy_word4.html",
    "Joy_x.html",
    "voice-assistant-v2.html",
]

def inject(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # 이미 삽입됐으면 스킵
    if 'joy-back' in content:
        print(f"  ⏭  이미 있음: {filepath}")
        return

    # </head> 바로 앞에 CSS 삽입
    if '</head>' in content:
        content = content.replace('</head>', BACK_CSS + '</head>', 1)
    else:
        # head 없으면 맨 앞에 추가
        content = BACK_CSS + content

    # <body> 태그 바로 뒤에 버튼 삽입
    body_match = re.search(r'<body[^>]*>', content)
    if body_match:
        insert_pos = body_match.end()
        content = content[:insert_pos] + BACK_HTML + content[insert_pos:]
    else:
        content = BACK_HTML + content

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)

    print(f"  ✅ 완료: {filepath}")

if __name__ == '__main__':
    base = os.path.dirname(os.path.abspath(__file__))
    print(f"\n🎈 Joy 앱 뒤로가기 버튼 삽입 시작\n경로: {base}\n")
    for fname in TARGET_FILES:
        fpath = os.path.join(base, fname)
        if os.path.exists(fpath):
            inject(fpath)
        else:
            print(f"  ⚠️  파일 없음: {fname}")
    print("\n✨ 완료!")
