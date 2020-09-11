/**
 * 1. 매칭점수 => 기본점수 + 링크점수
 *  1) 기본점수 => 텍스트 중 검색어 등장 횟수(대소문자 무시)
 *  2) 외부 링크 수 => 다른 외부 페이지 연결된 링크 개수
 *  3) 링크점수 => 다른 웹페이지의 기본 점수 / 외부 링크 수
 *
 * 2. 매칭 점수가 가능 높은 웹페이지의 Index를 구함
 * 3. 동일 웹페이지가 여러 개라면 그중 번호가 가장 작은것을 구하라.
 */

/**
 * 1. og:url 자기 자신의 href
 * 2. <a href=외부 링크> 모든 url은 https:// 로만 시작한다.
 * 3. word는 단어 단위로 매칭되어야함
 */
function solution(word, pages) {
  const pageInfos = {},
    pageUrls = [];
  let url;
  for (let i = 0; i < pages.length; i++) {
    url = getUrl(pages[i]);
    pageUrls.push(url);

    pageInfos[url] = {
      index: i,
      basePoint: getBasePoint(word, pages[i]),
      externalLinks: getExternalLinks(pages[i]),
      linkPoint: 0,
    };
  }

  for (let i = 0; i < pageUrls.length; i++) {
    setLinkPoint(pageUrls[i], pageInfos);
  }

  const pageInfoArray = [];
  for (let key of Object.keys(pageInfos)) {
    pageInfoArray.push(pageInfos[key]);
  }

  pageInfoArray.sort((a, b) => {
    if (a.basePoint + a.linkPoint - (b.basePoint + b.linkPoint) !== 0) {
      return b.basePoint + b.linkPoint - (a.basePoint + a.linkPoint);
    } else {
      return a.index - b.index;
    }
  });

  return pageInfoArray[0].index;
}

function getUrl(page) {
  // . 개행 문자를 제외한 모든 단일 문자 대응
  // * 앞의 표현식이 0회 이상 연속으로 반복되는 부분과 대응
  // ? 앞의 표현식이 0 또는 1회 등장하는 부분과 대응됩니다.

  let urls = page.match(
    new RegExp(`<meta property=\"og:url\" content=\"(.*?)\"`, "g")
  );
  return urls[0].split(/content=/gi)[1];
}

function getBasePoint(word, page) {
  //앞 뒤의 문자가 알파벳이 아니여야함 - 문제 확인 시 단어 구분 규칙
  //0muzi0muzi0 연속하여 나타나는 단어에 대해서 예외처리 필요 - lastindex로 인해 연속되는 단어에 matching이 안됨
  //sticky를 사용하여 last index -1 부터 검색하도록 수정 - [^A-Za-z]?${word}[^A-Za-z]?

  const isWordRegex = new RegExp(`${word}`, "i");
  const isAlphabeatRegex = /[A-Za-z]/;
  let list,
    count = 0;

  while ((list = page.match(isWordRegex))) {
    const prev = page[list.index - 1],
      next = page[list.index + word.length];

    if (!prev.match(isAlphabeatRegex) && !next.match(isAlphabeatRegex)) {
      count++;
    }

    page = page.slice(list.index + word.length - 1);
  }

  return count;
}

function getExternalLinks(page) {
  //https://로만 시작
  let links = page.match(new RegExp(`<a href=\"(.*?)\"`, "g"));

  if (!links) {
    return [];
  }

  return links.map((link) => {
    return link.split("href=")[1];
  });
}

function setLinkPoint(url, pageInfos) {
  const { externalLinks, basePoint } = pageInfos[url];
  const length = externalLinks.length;
  let targetPage;
  for (let i = 0; i < length; i++) {
    targetPage = pageInfos[externalLinks[i]];
    if (targetPage) {
      targetPage.linkPoint += basePoint / length;
    }
  }
}

/*
console.log(
  solution("blind", [
    '<html lang="ko" xml:lang="ko" xmlns="http://www.w3.org/1999/xhtml">\n<head>\n  <meta charset="utf-8">\n  <meta property="og:url" content="https://a.com"/>\n</head>  \n<body>\nBlind Lorem Blind ipsum dolor Blind test sit amet, consectetur adipiscing elit. \n<a href="https://b.com"> Link to b </a>\n</body>\n</html>',
    '<html lang="ko" xml:lang="ko" xmlns="http://www.w3.org/1999/xhtml">\n<head>\n  <meta charset="utf-8">\n  <meta property="og:url" content="https://b.com"/>\n</head>  \n<body>\nSuspendisse potenti. Vivamus venenatis tellus non turpis bibendum, \n<a href="https://a.com"> Link to a </a>\nblind sed congue urna varius. Suspendisse feugiat nisl ligula, quis malesuada felis hendrerit ut.\n<a href="https://c.com"> Link to c </a>\n</body>\n</html>',
    '<html lang="ko" xml:lang="ko" xmlns="http://www.w3.org/1999/xhtml">\n<head>\n  <meta charset="utf-8">\n  <meta property="og:url" content="https://c.com"/>\n</head>  \n<body>\nUt condimentum urna at felis sodales rutrum. Sed dapibus cursus diam, non interdum nulla tempor nec. Phasellus rutrum enim at orci consectetu blind\n<a href="https://a.com"> Link to a </a>\n</body>\n</html>',
  ])
);
*/

/*
console.log(
  solution("Muzi", [
    '<html lang="ko" xml:lang="ko" xmlns="http://www.w3.org/1999/xhtml">\n<head>\n  <meta charset="utf-8">\n  <meta property="og:url" content="https://careers.kakao.com/interview/list"/>\n</head>  \n<body>\n<a href="https://programmers.co.kr/learn/courses/4673"></a>#!MuziMuzi!)jayg07con&&\n\n</body>\n</html>',
    '<html lang="ko" xml:lang="ko" xmlns="http://www.w3.org/1999/xhtml">\n<head>\n  <meta charset="utf-8">\n  <meta property="og:url" content="https://www.kakaocorp.com"/>\n</head>  \n<body>\ncon%\tmuzI92apeach&2<a href="https://hashcode.co.kr/tos"></a>\n\n\t^\n</body>\n</html>',
  ])
);
*/

console.log(
  solution("Muzi", [
    '<meta property="og:url" content="https://www.kakaocorp.com"/> muzi0muzi0',
  ])
);
