def find_shortest_string(arr)
  arr.reduce{|a,b| a.length <= b.length ? a : b}

  # if arr.length == 1
  #   return arr[0]
  # end

  # recursive = find_shortest_string(arr.drop(1))
  # return arr[0].length <= recursive.length ? arr[0] : recursive
end

if __FILE__ == $PROGRAM_NAME
  puts "Expecting: 'a'"
  puts "=>", find_shortest_string(['aaa', 'a', 'bb', 'ccc'])

  puts

  puts "Expecting: 'hi'"
  puts "=>", find_shortest_string(['cat', 'hi', 'dog', 'an'])

  puts

  puts "Expecting: 'lily'"
  puts "=>", find_shortest_string(['flower', 'juniper', 'lily', 'dadelion'])

  # Don't forget to add your own!

  # BENCHMARK HERE
  times = []
  for i in 0..1000
    t0 = Time.now
    find_shortest_string(['flower', 'juniper', 'lily', 'dadelion'])
    t1 = Time.now
    times[i] = t1 - t0
  end
  puts times.reduce(0){|a, b| a + b}/1000
end

# Please add your pseudocode to this file
# And a written explanation of your solution
