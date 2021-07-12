#!/bin/bash
cd ~/bmt/submodules/video_features
for var in $(seq "$1" "$2")
do
	python main.py --feature_type vggish --on_extraction save_numpy --device_ids 0 1 2 \
		--video_paths ../../sample/test_"$var".mp4 \
		--output_path ../../sample/

	echo /nfs/home/ryan0507/ybigta/test_sample/test_"$var".mp4
done
