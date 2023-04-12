/*
TASK
        The task is to find the minimum number of conference rooms required to schedule meetings in a given array of meeting time 
    intervals without any conflicts. The solution should output the minimum number of conference rooms required to accommodate all
    the meetings without any overlap.

EDGE CASES
	• Empty input array: if the input array is empty, the output should be 0 because no conference rooms are required.
	• Array with only one interval: if the input array contains only one interval, the output should be 1 because only one
    conference room is required.
	• Intervals with the same start and end times: if an interval has the same start and end time, it means the meeting will be
    instantaneous, and it can be scheduled in the same conference room as another meeting starting at the same time. Therefore,
    such intervals should not be counted as conflicting intervals.

BRUTE FORCE
        The brute force solution for this problem has a time complexity of O(n^2) due to its use of two nested loops to compare
    each meeting time interval with every other interval to check for conflicts. To obtain the minimum number of conference rooms
    required for scheduling all meetings, we create a list of conflicting intervals for each interval, keep track of the maximum
    length of this list, and return this value plus one.
 */
const minMeetingRooms = intervals => {
    let maxConflicts = 0;
  
    // Loop through each meeting
    for (let i = 0; i < intervals.length; i++) {
      const conflicts = [];
  
      // Check if the current meeting conflicts with any other meeting
      for (let j = 0; j < intervals.length; j++) {
        if (i !== j) {
          if (intervals[i][0] >= intervals[j][0] && intervals[i][0] < intervals[j][1]) {
            conflicts.push(intervals[j]);
          }
          if (intervals[i][1] > intervals[j][0] && intervals[i][1] <= intervals[j][1]) {
            conflicts.push(intervals[j]);
          }
        }
      }
      
      // Update maxConflicts to the maximum number of conflicts seen so far
      maxConflicts = Math.max(maxConflicts, conflicts.length);
    }
  
    // The minimum number of conference rooms required is the maximum number of conflicts seen plus 1;
    // one for the first meeting, and one for each of the conflicting meetings.
    return maxConflicts + 1;
};

/*
IMPROVEMENTS AND PATTERN IDENTIFICATION
        To find the minimum number of conference rooms required to hold a set of meetings, we can use a priority queue to sort the
    intervals by start time and keep track of the end times of meetings in a separate queue. By removing end times from the queue
    when we encounter meetings that have started later than the earliest end time, we can find the maximum size of the queue, which
    gives us the minimum number of conference rooms required.

BIG-O
     Time = O(nlogn) , Space = O(n)
        The time complexity of this function is O(n log n) because it involves sorting the intervals array using a comparison function
    that takes O(log n) time to compare each pair of elements, and then looping through the array once, which takes O(n) time.
    Therefore, the total time complexity is O(n log n).
        The space complexity of this function is O(n), where n is the length of the input array intervals. This is because the function
    uses an additional array endTimes to store the end times of each meeting and this array could potentially store all n end times.
    The space complexity is further optimized by only storing the end times that are relevant to the current meeting being processed,
    resulting in a smaller maximum size of the endTimes array.
*/

// https://leetcode.com/problems/meeting-rooms-ii/description/
// Function takes an array of intervals representing meetings and returns the minimum number of conference rooms required to schedule
//   all the meetings without any overlap.
const minMeetingRooms = intervals => {
    // Sort the intervals array in ascending order based on the start time of each meeting
    intervals.sort((a, b) => a[0] - b[0]);
    
    // Initialize an empty array to store the end times of each meeting, and a variable to keep track of the maximum number of rooms needed
    const endTimes = [];
    let maxRooms = 0;
  
    // Loop through each meeting in the intervals array
    for (let i = 0; i < intervals.length; i++) {
      // While there are meetings that have already ended and their end times are earlier than the start time of the current meeting,
      // remove them from the endTimes array
      while (endTimes.length > 0 && intervals[i][0] >= endTimes[0]) {
        endTimes.shift();
      }
      
      // Add the end time of the current meeting to the endTimes array
      endTimes.push(intervals[i][1]);
      
      // Update maxRooms to the maximum number of rooms needed so far
      maxRooms = Math.max(maxRooms, endTimes.length);
    }
  
    // Return the maximum number of rooms needed
    return maxRooms;
  };
  