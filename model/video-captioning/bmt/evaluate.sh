#!/bin/bash
cd ~/bmt
for var in $(seq "$1" "$2")
do
	python ./sample/single_video_prediction.py --prop_generator_model_path ./sample/best_prop_model.pt \
		--pretrained_cap_model_path ./sample/best_cap_model.pt \
		--vggish_features_path ./sample/test_"$var"_vggish.npy \
		--rgb_features_path ./sample/test_"$var"_rgb.npy \
		--flow_features_path ./sample/test_"$var"_flow.npy \
		--duration_in_secs 720.155 \
		--device_id 0 \
		--max_prop_per_vid 500 \
		--nms_tiou_thresh 0.4 \
		--output_json "$3"
done
