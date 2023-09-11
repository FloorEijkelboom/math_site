#!/bin/bash

# Concatenate all .md files in the desired order
cat $(find . -type f -name '*.md' | sort) > combined_book.md

# Convert the concatenated .md file to PDF using Pandoc
pandoc combined_book.md -o my_book.pdf

# Clean up temporary files
rm combined_book.md
