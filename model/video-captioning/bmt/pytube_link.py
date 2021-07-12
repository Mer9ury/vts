from pytube import YouTube
import argparse
import os
import sys
import moviepy.editor
from moviepy.video.io.ffmpeg_tools import ffmpeg_extract_subclip

parser = argparse.ArgumentParser(description='Pytube Experiment')
parser.add_argument('--link_file', type=str, default = './link_list.txt')
parser.add_argument('--test_file_num', type = int, required = True,
                    help = 'Choose file num such as test_i.mp4')
args = parser.parse_args()

link_file = open(args.link_file)
line = link_file.readline().rstrip('\n')
cnt = args.test_file_num
label_file = open('/nfs/home/ryan0507/ybigta/original_files.txt', mode = "w")
while line:
  yt = YouTube(line)
  yt = yt.streams.first()
  print('Downloading ' + line)
  yt.download(output_path='/nfs/home/ryan0507/bmt/sample/', filename='test_'+str(cnt))
  file_path = '/nfs/home/ryan0507/bmt/sample/' + 'test_' + str(cnt) +'.mp4'
  vid_len = moviepy.editor.VideoFileClip(file_path).duration

  cut_end = 420
  cut_start = 0

  if vid_len > cut_end:
    while vid_len > cut_start:
      start_time = cut_start

      if cut_start + 420 > vid_len:
        end_time = vid_len
      else:
        end_time = cut_start + 420
      ffmpeg_extract_subclip(file_path, start_time, end_time,
                             targetname=file_path.split('_')[0] + '_' + str(cnt) + '.mp4')
      cnt += 1
      cut_start += 420

  print(line , 'downloaded with test_' + str(cnt))
  label_file.write('test_' + str(cnt) + ' : ' + line)
  cnt += 1
  line = link_file.readline().rstrip('\n')


