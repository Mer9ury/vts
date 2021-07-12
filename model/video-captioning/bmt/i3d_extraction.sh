#!/bin/bash
cd ~/bmt/submodules/video_features
for var in $(seq "$1" "$2")
do
	python main.py --feature_type i3d --on_extraction save_numpy --device_ids 0 1 2 \
		--extraction_fps 10 --video_paths ../../sample/test_"$var".mp4 \
		--output_path ../../sample

	echo /nfs/home/ryan0507/ybigta/test_sample/test_"$var".mp4
done
