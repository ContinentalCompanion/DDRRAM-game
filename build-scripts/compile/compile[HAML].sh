#!/bin/bash
 [[ -e build-scripts/compile/compile\[HAML\].sh ]] || { echo >&2 "Please cd into root before running this script."; exit 1; }
 [[ -e src/hamlconfig.txt ]] || { echo >&2 "Error: src/hamlconfig.txt does not exist."; exit 1; }

root="$PWD"

printf "\n"
printf "Compiling [HAML]..."
printf "\n\n"

# Compiles all HAML files listed in src/hamlconfig.txt
input="src/hamlconfig.txt"
while IFS= read -r line
do
    hamlPath="src/$line"
    htmlOut="${hamlPath%.*}"
    fileName=$(basename -- "$line")

    printf "Compiling [$fileName]..."
    haml $hamlPath $htmlOut
    printf "\n"
done < "$input"

printf "\n"
printf "Compiling [HAML] complete."
printf "\n\n"
