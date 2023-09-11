#!/bin/bash

# Specify the name of the single .md file you want to convert to PDF
input_file="docs/essentials/bases.md"

# Convert the .md file to PDF using Pandoc
pandoc "$input_file" -o my_single_file.pdf

echo "PDF generated successfully."
