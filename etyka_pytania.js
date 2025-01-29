const questions = [
  {
    question: "Kodeks Zawodowy Informatyków PTI:",
    type: "multiple",
    answers: [
      "został uchwalony w 1990 r.",
      "przeznaczony jest tylko i wyłącznie dla członków PTI",
      "został uchwalony przez Polskie Towarzystwo Informatyków",
      "obowiązuje we wszystkich sferach aktywności informatycznej zachowań",
    ],
    correct: [2, 3],
    explanation:
      "Kodeks został uchwalony przez Polskie Towarzystwo Informatyczne (PTI) i obowiązuje we wszystkich obszarach aktywności zawodowej informatyków, nie tylko wąskiej grupy członków.",
  },
  {
    question:
      "CV chronologiczne przedstawia doświadczenie zawodowe kandydata w odwrotnej kolejności chronologicznej",
    type: "single",
    answers: ["Prawda", "Fałsz"],
    correct: 0,
    explanation:
      "W CV chronologicznym (często nazywanym odwrotnie chronologicznym) najpierw wymienia się najnowsze doświadczenia.",
  },
  {
    question: "Rerum novarum to:",
    type: "multiple",
    answers: [
      "encyklika papieża Leona XIII",
      "dokument poświęcony tzw. kwestii robotniczej",
      "dokument opracowany przez Parlament Europejski",
      "dokument opracowany przez Komisję Europejską",
    ],
    correct: [0, 1],
    explanation:
      "Rerum novarum to encyklika papieża Leona XIII z 1891 roku poświęcona kwestii robotniczej.",
  },
  {
    question: "Które stwierdzenia są prawdziwe?",
    type: "multiple",
    answers: [
      "mikroetyka bada aspekty etyczne w skali gospodarki narodowej oraz społeczeństwa",
      "etyka biznesu ma charakter wyłącznie teoretyczny",
      "społeczna odpowiedzialność przedsiębiorstw jest jednym ze sposobów realizacji etyki biznesu",
      "kodeks etyczny stanowi element programu etycznego",
    ],
    correct: [2, 3],
    explanation:
      "Mikroetyka dotyczy raczej mniejszych skal, a etyka biznesu nie jest wyłącznie teoretyczna. Społeczna odpowiedzialność to praktyczny wymiar etyki biznesu, a kodeks etyczny jest częścią szerszego programu etycznego.",
  },
  {
    question: "Etyka gospodarcza ma charakter wartościujący.",
    type: "single",
    answers: ["Prawda", "Fałsz"],
    correct: 0,
    explanation:
      "Etyka gospodarcza zajmuje się oceną działań w sferze gospodarczej i wprowadza kategorie dobra i zła, więc z definicji jest wartościująca.",
  },
  {
    question: "Program etyczny to element kodeksu etycznego.",
    type: "single",
    answers: ["Prawda", "Fałsz"],
    correct: 1,
    explanation:
      "Jest odwrotnie: to kodeks etyczny jest częścią szerszego programu etycznego, a nie na odwrót.",
  },
  {
    question:
      "Amnesty International to światowa organizacja do walki z korupcją.",
    type: "single",
    answers: ["Prawda", "Fałsz"],
    correct: 1,
    explanation:
      "Amnesty International zajmuje się ochroną praw człowieka, a nie wyłącznie walką z korupcją.",
  },
  {
    question:
      "Specyfika wykonywanego zawodu może być uregulowana odrębnymi zestawami norm, czyli:",
    type: "single",
    answers: [
      "kodeksem cywilnym",
      "kodeksem administracyjnym",
      "kodeksem zawodowym",
      "kodeksem karnym",
    ],
    correct: 2,
    explanation:
      "Odrębne normy wykonywanego zawodu to właśnie kodeksy zawodowe, np. kodeksy etyczne czy deontologiczne.",
  },
  {
    question:
      "Whistleblowing to praktyka polegająca na kopiowaniu rozwiązań dotyczących etycznych sposobów prowadzenia biznesu przez inne firmy",
    type: "single",
    answers: ["Prawda", "Fałsz"],
    correct: 1,
    explanation:
      "Whistleblowing polega na ujawnianiu nadużyć czy nieetycznych zachowań w organizacji, nie ma związku z kopiowaniem rozwiązań.",
  },
  {
    question:
      "Chociaż encyklika Rerum Novarum poświęcona była problematyce pracy robotników, to nie uznawała prawa do tworzenia pracowniczych związków zawodowych.",
    type: "single",
    answers: ["Prawda", "Fałsz"],
    correct: 1,
    explanation:
      "Encyklika Rerum Novarum uznawała m.in. prawo pracowników do zrzeszania się w związki zawodowe.",
  },
  {
    question: "Etyka gospodarcza obejmuje",
    type: "multiple",
    answers: [
      "tylko etykę zawodową i etykę zarządzania",
      "etykę globalną",
      "etykę zarządzania",
      "etykę zawodową",
    ],
    correct: [1, 2, 3],
    explanation:
      "Etyka gospodarcza nie ogranicza się wyłącznie do etyki zarządzania i etyki zawodowej, lecz obejmuje także etykę globalną i wiele innych obszarów.",
  },
  {
    question:
      "Badaniem moralności praktykowanej przez przedstawicieli konkretnych zawodów lub profesji bezpośrednio lub pośrednio związanych z gospodarką rynkową zajmuje się etyka zawodowa.",
    type: "single",
    answers: ["Prawda", "Fałsz"],
    correct: 0,
    explanation:
      "Etyka zawodowa dotyczy norm i zasad moralnych praktykowanych w konkretnych grupach zawodowych.",
  },
  {
    question: "Rozwój zrównoważony:",
    type: "multiple",
    answers: [
      "pozwala osiągnąć efekty synergiczne pomiędzy sferą ekonomiczną, społeczną i środowiskiem",
      "obejmuje wyzwania i zobowiązania, które podejmowane są na rzecz ochrony środowiska, społeczności i gospodarki",
      "stanowi sposób gospodarowania, w którym zaspokojenie potrzeb obecnego pokolenia nie zmniejszy szans zaspokojenia potrzeb przyszłych pokoleń",
      "traktuje czynniki ekonomiczne, polityczne, społeczne i ekologiczne jako niezależne od siebie",
    ],
    correct: [0, 1, 2],
    explanation:
      "Rozwój zrównoważony łączy aspekty społeczne, środowiskowe i ekonomiczne; nie traktuje ich jako niezależne, lecz współzależne.",
  },
  {
    question: "Pierwsza książka dotycząca etyki biznesu pochodzi z:",
    type: "multiple",
    answers: ["1885 r.", "1994 r.", "1926 r.", "1960 r."],
    correct: [2],
    explanation:
      "Za jedną z pierwszych publikacji z zakresu etyki biznesu uznaje się pozycję z roku 1926; przyjmuje się, że dopiero wtedy zaczęto systematycznie łączyć pojęcia 'biznes' i 'etyka' w literaturze.",
  },
  {
    question: "CV jest znacznie dłuższe i bardziej kompleksowe niż __________",
    type: "single",
    answers: ["resume", "cover letter", "job application", "reference letter"],
    correct: 0,
    explanation:
      "W krajach anglosaskich 'resume' jest krótką formą dokumentu rekrutacyjnego, a CV jest bardziej rozbudowane.",
  },
  {
    question:
      "Narzędzia CSR umożliwiające przedsiębiorstwom wpływanie na postawy społeczeństwa za pośrednictwem mediów to __________",
    type: "single",
    answers: [
      "kampanie społeczne",
      "podnoszenie cen",
      "audyt technologiczny",
      "badania fokusowe",
    ],
    correct: 0,
    explanation:
      "Kampanie społeczne pozwalają firmom promować pozytywne zachowania i postawy wśród odbiorców, wspierając wizerunek odpowiedzialności społecznej.",
  },
  {
    question:
      "Opracowanie kodeksu etycznego przedsiębiorstwa jest mechanizmem CSR o charakterze uczestniczącym",
    type: "single",
    answers: ["Prawda", "Fałsz"],
    correct: 0,
    explanation:
      "Tworzenie kodeksu etycznego zwykle angażuje różne grupy w firmie, jest więc narzędziem uczestniczącym w ramach CSR.",
  },
  {
    question: "Społeczna odpowiedzialność biznesu, ma swe podłoże w koncepcji:",
    type: "multiple",
    answers: [
      "historii biznesu",
      "żadna odpowiedź nie jest prawidłowa",
      "etykiety biznesu",
      "etyki biznesu",
    ],
    correct: [3],
    explanation:
      "CSR (Corporate Social Responsibility) wyrasta z nurtu etyki biznesu, która dostarcza podstaw moralnych do odpowiedzialnego działania firm.",
  },
  {
    question:
      "Negatywnym skutkiem realizacji idei CSR może być lepszy obraz marki.",
    type: "single",
    answers: ["Prawda", "Fałsz"],
    correct: 1,
    explanation:
      "Lepszy wizerunek marki trudno uznać za negatywny skutek. Zazwyczaj to pozytywny rezultat działań w obszarze CSR.",
  },
  {
    question: "Do grona interesariuszy firmy należą:",
    type: "multiple",
    answers: [
      "menedżerowie",
      "tylko i wyłącznie akcjonariusze",
      "klienci",
      "pracownicy",
    ],
    correct: [0, 2, 3],
    explanation:
      "Interesariuszami firmy są wszystkie podmioty mające wpływ na organizację lub pozostające pod jej wpływem: pracownicy, klienci, menedżerowie, społeczność lokalna i inni (nie tylko akcjonariusze).",
  },
  {
    question:
      "Proces przemian, który zapewnia zaspokajanie potrzeb obecnego pokolenia bez umniejszania szans rozwojowych przyszłych generacji, nosi nazwę ______",
    type: "single",
    answers: [
      "rozwój zrównoważony",
      "inflacja",
      "recesja",
      "cykl koniunkturalny",
    ],
    correct: 0,
    explanation:
      "Jest to definicja zrównoważonego rozwoju (sustainable development).",
  },
  {
    question: "Które stwierdzenia są prawdziwe?:",
    type: "multiple",
    answers: [
      "edukacja i nauka są jednym z obszarów CSR",
      "referencje nigdy nie znajdują się w CV",
      "program etyczny stanowi element kodeksu etycznego",
      "kodeks etyczny stanowi element programu etycznego",
    ],
    correct: [0, 3],
    explanation:
      "Edukacja i nauka to ważne obszary działań CSR. Kodeks etyczny jest zazwyczaj elementem szerszego programu etycznego, a nie odwrotnie. Referencje mogą się w CV pojawiać.",
  },
  {
    question:
      "Badaniem moralności praktykowanej przez przedstawicieli konkretnych zawodów lub profesji bezpośrednio lub pośrednio związanych z gospodarką rynkową zajmuje się __________",
    type: "single",
    answers: [
      "etyka zawodowa",
      "filozofia analityczna",
      "zarządzanie zasobami ludzkimi",
      "prawo spółek handlowych",
    ],
    correct: 0,
    explanation:
      "Pojęcie 'etyka zawodowa' dotyczy norm moralnych w konkretnych profesjach.",
  },
  {
    question:
      "Zgodnie z ideą społecznej odpowiedzialności biznesu działania gospodarcze powinny być: __________ odpowiedzialne, ekologicznie przyjazne i ekonomicznie wartościowe.",
    type: "single",
    answers: ["społecznie", "nieobowiązkowo", "centralnie", "prywatnie"],
    correct: 0,
    explanation:
      "CSR wskazuje, że działalność gospodarcza musi uwzględniać dobro społeczne, dbać o środowisko i przynosić wartości ekonomiczne.",
  },
];
