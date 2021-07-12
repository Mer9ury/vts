from pytube import YouTube
import sys

link_file = open('/nfs/home/ryan0507/ybigta/link_list3.txt')
line = link_file.readline().rstrip('\n')
cnt = 31
label_file = open('/nfs/home/ryan0507/ybigta/original_files.txt', mode = "w")
while line:
  yt = YouTube(line)
  yt = yt.streams.first()
  print('Downloading ' + line)
  yt.download(output_path='/nfs/home/ryan0507/bmt/sample/', filename='test_'+str(cnt))
  print(line , 'downloaded with test_' + str(cnt))
  label_file.write('test_' + str(cnt) + ' : ' + line + '\n')
  cnt += 1
  line = link_file.readline().rstrip('\n')


