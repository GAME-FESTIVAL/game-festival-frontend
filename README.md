## 설치 및 실행 방법

### 1. 의존성 설치

```bash
npm install
```

### 2. 프로젝트 실행

```bash
npm run dev
```

### 3. 프로젝트 빌드

```bash
npm run build
```

## 폴더 구조

- `components`: 프로젝트에서 사용되는 UI 컴포넌트를 모아둔 폴더입니다.
  - `units`: 작고 재사용 가능한 단위 컴포넌트를 관리합니다. (옵셔널)
  - `blocks`: units를 조합한 더 큰 단위의 컴포넌트를 관리합니다. (옵셔널)
  - `layouts`: 페이지 레이아웃 관련 컴포넌트를 관리합니다. (옵셔널)
  - `pages`: 각 도메인의 페이지를 구성하는 컴포넌트를 관리합니다.
- `hooks`: 커스텀 React Hook을 관리합니다. (옵셔널)
- `services`: API 요청 및 데이터 처리를 담당하는 서비스 계층입니다. (옵셔널)
- `utils`: 공통으로 사용하는 유틸리티 함수들을 관리합니다. (옵셔널)
- `types`: TypeScript의 타입 정의를 관리합니다. (옵셔널)
- `constants`: 상수 값을 모아둔 폴더입니다. (옵셔널)

## 경로 설정

### 1. 경로 별칭(Path Alias) 설정

**타입 패스 별칭(Type Path Alias)**을 사용하여 도메인별 폴더에 `@domain/` 문법으로 간단히 접근할 수 있습니다.

예를 들어 `src/domains/domain/components` 경로에 있는 파일들을 아래와 같이 간단히 임포트할 수 있습니다!

```typescript
import { MyComponent } from "@domain/components";
```

이를 통해 깊은 경로를 직접 작성할 필요 없이 코드의 가독성과 유지보수성을 높였습니다.

### 2. 폴더별 index.ts 파일 활용

각 폴더에 index.ts 파일을 생성하여 해당 폴더 내 파일들을 한 곳에서 모듈화한 상태로 내보낼 수 있도록 설정했습니다.
이 방식으로 개별 파일을 하나씩 임포트하지 않고 여러 파일을 동시에 임포트할 수 있습니다.

예시)

src/domains/domain/components/index.ts 파일:

```typescript
export { default as Component1 } from "./Component1";
export { default as Component2 } from "./Component2";
export { default as Component3 } from "./Component3";
```

Component1, Component2, Component3를 사용하려는 곳에서:

```typescript
import { Component1, Component2, Component3 } from "@domain/components";
```

이 설정으로 다음과 같은 이점을 얻을 수 있습니다:

임포트 간소화: 여러 파일을 별도로 임포트하지 않아도 됩니다.
유지보수성 향상: 폴더 내 파일 구조 변경 시에도 임포트 경로를 일관성 있게 유지할 수 있습니다.

## 브랜치 전략

프로젝트의 브랜치는 다음과 같이 구분하여 사용합니다:

- **main**: 배포 가능한 안정된 코드만 관리합니다.
- **dev**: 개발 작업이 이루어지는 브랜치로, 모든 기능은 이 브랜치에서 통합됩니다.
- **feature**: 각 기능/작업 단위로 생성되는 브랜치입니다. 작업이 완료되면 `dev` 브랜치로 병합됩니다.

**브랜치 작업 흐름 예시**:

1. 새로운 작업 시 `dev` 브랜치를 기준으로 `feature` 브랜치를 생성합니다.

   예시)

   ```bash
   git checkout -b feature/domain/jyh
   ```

2. 작업 완료 후 `feature` 브랜치를 원격 저장소로 푸시합니다.

   - 작업 도중 `dev` 브랜치에 다른 사람의 작업이 머지된 경우, 내 작업 브랜치에 최신 dev 브랜치를 머지한 후 작업을 이어갑니다.

3. Pull Request(PR)를 생성하여 코드 리뷰를 요청합니다.

4. 코드 리뷰를 받은 후, Squash and Merge 방식으로 `dev` 브랜치에 병합합니다.

   - Squash and Merge를 통해 feature 브랜치에서 발생한 여러 커밋을 하나의 커밋으로 합쳐 기록을 간결하게 유지합니다.

5. 병합 완료 후 feature 브랜치는 원격 저장소에서 삭제합니다.

## 커밋명 규칙

작업 내용과 작업 유형에 대한 명확한 표현을 위해 아래의 규칙을 권장합니다.

```
<작업 유형>(<도메인>): 작업 내용
```

- **작업 유형**: 작업 성격을 나타냅니다.
  - 예: `debug`, `refactor`, `task`
- **도메인**: 작업 영역을 명시합니다.
  - 예: `common`, `auth` 등
- **작업 내용**: 작업 내용을 간결하게 작성합니다.

---

예시)

- `debug(auth): 토큰 만료 오류 수정`
- `refactor(mypage): 중복된 함수 제거 및 최적화`
- `task(common): 데이트 포맷팅 함수 추가`
