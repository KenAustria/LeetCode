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
        We can first sort the intervals in ascending order based on their start times, which helps to keep track of the end times of
    meetings currently in progress, so that we can quickly determine if a new meeting needs a new room or if it can fit in an existing
    room. 
    
        We use two pointers to keep track of the start and end times of each meeting, enabling it to only compare each meeting to the
    next meeting in the sorted list. This helps to determine if a new meeting needs a new room or can fit in an existing room quickly,
    making the comparison process faster and achieving a better time complexity.

BIG-O
    Time = O(nlogn) , Space = O(n)
    The time complexity of this solution is O(n log n), where n is the number of intervals. This is because we are performing two separate
sorts on the start and end times, which both take O(n log n) time in the worst case. We also iterate through the intervals array once,
which takes O(n) time. Therefore, the overall time complexity is O(n log n).

    The space complexity is O(n), where n is the number of intervals. This is because we are creating two separate arrays of start and end
times, each of which has length n. We are also using two integer variables to keep track of the room count and the end pointer, which takes
constant space. Therefore, the overall space complexity is O(n).
*/

// Define a function named minMeetingRooms that takes an array of meeting time intervals as input
const minMeetingRooms = intervals => {
    // If the intervals array is undefined or empty, return 0
    if (!intervals || intervals.length < 1) return 0;

    // Initialize the room count and the end pointer to 0
    let rooms = 0;
    let end = 0;

    // Extract the start and end times of each meeting into separate arrays, sort them in ascending order
    const starts = intervals.map(a => a[0]).sort((a, b) => a - b);
    const ends = intervals.map(a => a[1]).sort((a, b) => a - b);

    // Iterate through the intervals array using a for loop
    for(let i = 0; i < intervals.length; i++) {
        // If the start time of the current meeting is less than the end time of the meeting that currently has the earliest end time, increment the room count
        if(starts[i] < ends[end]) {
            rooms++;
        } else { // Otherwise, increment the end pointer to move on to the next meeting that finishes earliest
            end++;
        }
    }

    // Return the room count
    return rooms;
};
