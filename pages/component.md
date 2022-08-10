## Atomic Design
デザインを構築するための方法論
デザインを段階的に定義することで、一貫性を持ち、管理しやすくしている。
・Atom      ：最小単位　ボタンやテキスト
・Molecules ：複数のAtom　ラベル付きテキストボックス
・Organisms ：Moleculesよりもより具体的な要素
・Templates ：ページ全体のレイアウト
・Pages     ：ページそのもの


## Presentational Componet
見た目を実装するコンポーネント。基本的にpropsで渡されたデータをもとに適切なUIパーツを表示することだけをする。
・スタイルの適用もこのコンポーネントで行う。
・内部に状態を持たせず、API呼び出しなどの副作用を実行しない

## Container Component
デザインは一切実装せずに、ビジネスロックのみを担う
・Hooksを持たせて、状態を使って表示内容を切り替える、APIコールなどの副作用を実行するなどふるまいを実装する
・Contextを参照してPresentational Componetへ渡す



