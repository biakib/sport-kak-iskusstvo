#!/usr/bin/env bash
set -euo pipefail

origin="https://sport-kak-iskusstvo-ivan-egorov.bushmanov-ilya.chatgpt.site"
rm -rf dist
mkdir -p dist/assets dist/images dist/fonts
mkdir -p dist/assets/_vinext_fonts/geist-8ac0455e797f
mkdir -p dist/assets/_vinext_fonts/geist-mono-00e989178794

files=(
  "index.html"
  "stork-symbol-full.jpg"
  "images/aikido-outdoor.jpg"
  "images/ivan-new.png"
  "images/nikolay-new.png"
  "images/ilya-new.png"
  "images/denis-kruglov.png"
  "events-stage.jpg"
  "events-production.png"
  "hero-aikido-clean.png"
  "og.png"
  "favicon.svg"
  "assets/index-C1qDmq2B.css"
  "assets/layout-segment-context-CqrGLgxT.js"
  "assets/rolldown-runtime-S-ySWqyJ.js"
  "assets/index-BDxKwxAQ.js"
  "assets/framework-DjPHiq1u.js"
  "assets/MentorProfiles-D6eTuQfD.js"
  "assets/_vinext_fonts/geist-8ac0455e797f/geist-ff2310f5.woff2"
  "assets/_vinext_fonts/geist-8ac0455e797f/geist-875ccdd4.woff2"
  "assets/_vinext_fonts/geist-8ac0455e797f/geist-52306abf.woff2"
  "assets/_vinext_fonts/geist-8ac0455e797f/geist-001175b1.woff2"
  "assets/_vinext_fonts/geist-8ac0455e797f/geist-98bbbccb.woff2"
  "assets/_vinext_fonts/geist-mono-00e989178794/geist-mono-f6b33328.woff2"
  "assets/_vinext_fonts/geist-mono-00e989178794/geist-mono-44e03052.woff2"
  "assets/_vinext_fonts/geist-mono-00e989178794/geist-mono-0638449e.woff2"
  "assets/_vinext_fonts/geist-mono-00e989178794/geist-mono-971fb274.woff2"
  "assets/_vinext_fonts/geist-mono-00e989178794/geist-mono-44745446.woff2"
  "assets/_vinext_fonts/geist-mono-00e989178794/geist-mono-013b2f2f.woff2"
  "fonts/Yq6F-LOTXCb04q32xlpat-6uR42XTqtG68b2040.ttf"
  "fonts/Yq6F-LOTXCb04q32xlpat-6uR42XTqtG6__2040.ttf"
  "fonts/Yq6F-LOTXCb04q32xlpat-6uR42XTqtG6xjx040.ttf"
  "fonts/Yq6F-LOTXCb04q32xlpat-6uR42XTqtG6yrx040.ttf"
  "fonts/xn7_YHE41ni1AdIRqAuZuw1Bx9mbZk4aE-_F.ttf"
  "fonts/xn7_YHE41ni1AdIRqAuZuw1Bx9mbZk4jE-_F.ttf"
  "fonts/xn7_YHE41ni1AdIRqAuZuw1Bx9mbZk59E-_F.ttf"
  "fonts/xn7_YHE41ni1AdIRqAuZuw1Bx9mbZk79FO_F.ttf"
  "fonts/xn7_YHE41ni1AdIRqAuZuw1Bx9mbZk7PFO_F.ttf"
)

for file in "${files[@]}"; do
  mkdir -p "dist/$(dirname "$file")"
  source_path="$file"
  if [ "$file" = "index.html" ]; then source_path=""; fi
  curl --fail --location --retry 4 --retry-all-errors "$origin/$source_path" -o "dist/$file"
done

sed -i 's#="/#="./#g; s#import("/assets/#import("./assets/#g; s#url(/assets/#url(./assets/#g' dist/index.html
sed -i 's#url(/fonts/#url(../fonts/#g; s#url(/hero-aikido-clean.png)#url(../hero-aikido-clean.png)#g' dist/assets/index-C1qDmq2B.css
perl -0pi -e 's{<script>\(function\(\)\{function c\(\).*?</script>}{}s' dist/index.html
# Prioritize the actual brand fonts and avoid a visible fallback-font swap.
perl -0pi -e 's{<link rel="preload" href="\\./assets/_vinext_fonts/[^>]+>\\s*}{}g' dist/index.html
perl -0pi -e 's{</head>}{<link rel="preload" href="./fonts/xn7_YHE41ni1AdIRqAuZuw1Bx9mbZk79FO_F.ttf" as="font" type="font/ttf" crossorigin><link rel="preload" href="./fonts/xn7_YHE41ni1AdIRqAuZuw1Bx9mbZk7PFO_F.ttf" as="font" type="font/ttf" crossorigin><link rel="preload" href="./fonts/xn7_YHE41ni1AdIRqAuZuw1Bx9mbZk59E-_F.ttf" as="font" type="font/ttf" crossorigin><link rel="preload" href="./fonts/Yq6F-LOTXCb04q32xlpat-6uR42XTqtG6yrx040.ttf" as="font" type="font/ttf" crossorigin></head>}g' dist/index.html
perl -0pi -e 's#@font-face\\{font-family:(Manrope|Unbounded);#@font-face{font-family:$1;font-display:block;#g' dist/assets/index-C1qDmq2B.css
cp arrow-overrides.css dist/arrow-overrides.css
sed -i 's#</head>#<link rel="stylesheet" href="./arrow-overrides.css"></head>#' dist/index.html
touch dist/.nojekyll
