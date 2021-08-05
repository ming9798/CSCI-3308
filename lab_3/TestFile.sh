#!/bin/bash
# Author : Mia Nguyen
# Date : 6/13/2021
# Script follows here:

count_lines(){
echo "Counting lines:"
sed -n '$=' sample_text.txt
}

count_words(){
echo "Counting words:"

grep -i -o -w '\<\(Lorem\|model\|Ipsum\|will\)\>' sample_text.txt | wc -w
echo "Lines where these words appear:"
grep -n "Lorem" sample_text.txt
grep -n "model" sample_text.txt
grep -n "Ipsum" sample_text.txt
grep -n "will" sample_text.txt
}

add_text(){
echo "Enter a sentence to append to the file:"
read userSentence
echo $userSentence >> sample_text.txt
}

copy_and_exit(){
echo "Making a Solutions folder"
mkdir Solutions
echo "Copying sample_text.txt to the Solutions folder"
cp sample_text.txt /Users/mia/lab_3/Solutions
}

while :
do
if [ -e sample_text.txt ]
then
	echo "Menu Options:"
	echo "1: Count Lines"
	echo "2: Count Words"
	echo "3: Add Text"
	echo "4: Copy and Exit"
read num
case "$num" in
	"1") count_lines
	;;
	"2") count_words
	;;
	"3") add_text
	;;
	"4") copy_and_exit
	;;
esac
else 
	echo "Error: file does not exist"
fi
done
 