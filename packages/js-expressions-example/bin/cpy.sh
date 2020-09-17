#!/usr/bin/env bash
mkdir -p "public/js"
cp ../js-expressions-core/dist/* public/js
cp ../js-expressions-client/dist/* public/js
cp ../js-expressions-example/dist/* public/js
cp ../runtime/dist/* public/js