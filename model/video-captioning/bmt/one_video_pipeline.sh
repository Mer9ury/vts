#!/bin/bash
eval "$(conda shell.bash hook)"
conda activate base
cd ~/bmt
python pytube_link.py --link_file $3 --test_file_num $1
eval "$(conda shell.bash hook)"
conda activate i3d
cd ~/bmt
./i3d_extraction.sh $1 $2
eval "$(conda shell.bash hook)"
conda activate vggish
cd ~/bmt
./vgg_extraction.sh $1 $2
eval "$(conda shell.bash hook)"
conda activate bmt
cd ~/bmt
./evaluate.sh $1 $2 $4
