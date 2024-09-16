// YouTube Shorts 요소를 제거하는 함수
function removeYouTubeShorts() {
  // 'ytd-rich-grid-slim-media' 또는 'ytd-rich-item-renderer' 클래스 중 'is-short' 속성을 가진 요소를 선택
  const shortsElements = document.querySelectorAll(
    "ytd-rich-grid-slim-media[is-short], ytd-rich-item-renderer[is-short]"
  );

  // 선택된 요소들을 루프를 돌며 제거
  shortsElements.forEach((element) => {
    if (element.parentNode) {
      element.parentNode.removeChild(element);
    }
  });
}

// 처음 페이지 로드 시 Shorts 요소 제거
removeYouTubeShorts();

// 페이지의 변화(새로운 요소 추가 등)를 감지하고 Shorts를 제거
const observer = new MutationObserver((mutations) => {
  // DOM 변화가 있을 때만 removeYouTubeShorts 실행
  mutations.forEach((mutation) => {
    if (mutation.addedNodes.length > 0) {
      removeYouTubeShorts();
    }
  });
});

// body 요소만 감시하여 DOM 변화 추적
observer.observe(document.body, { childList: true, subtree: true });
