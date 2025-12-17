// quizData.js - G1 Test Questions

// ==================== ROAD SIGNS QUESTIONS (78) ====================
export const ROAD_SIGNS_QUESTIONS = [
	// WARNING SIGNS (Yellow Diamond Signs)
	{
		question: "What does this sign mean?",
		image: "images/signs/share-road.png",
		imageAlt:
			"Diamond-shaped yellow sign with arrows showing traffic going in both directions",
		answers: [
			{ text: "Two-way traffic ahead", correct: false },
			{ text: "Share the road with oncoming traffic", correct: true },
			{ text: "Divided highway ahead", correct: false },
			{ text: "Lane ends ahead", correct: false },
		],
	},
	{
		question: "What does this sign mean?",
		image: "images/signs/divided-end.png",
		imageAlt:
			"Diamond-shaped yellow sign showing the road dividing with arrows",
		answers: [
			{ text: "Road merges ahead", correct: false },
			{ text: "Divided road ends, keep to the right", correct: true },
			{ text: "Two-way traffic", correct: false },
			{ text: "Lane change required", correct: false },
		],
	},
	{
		question: "What does this sign mean?",
		image: "images/signs/curve.png",
		imageAlt:
			"Diamond-shaped yellow sign with a curved arrow first right then left",
		answers: [
			{ text: "Winding road ahead", correct: false },
			{ text: "Road ahead turns right, then left", correct: true },
			{ text: "Sharp turn ahead", correct: false },
			{ text: "Merge right", correct: false },
		],
	},
	{
		question: "What does this sign mean?",
		image: "images/signs/deer.png",
		imageAlt: "Diamond-shaped yellow sign with a deer symbol",
		answers: [
			{ text: "Wildlife sanctuary ahead", correct: false },
			{ text: "Deer regularly cross, be alert for animals", correct: true },
			{ text: "Hunting area", correct: false },
			{ text: "Zoo ahead", correct: false },
		],
	},
	{
		question: "What does this sign mean?",
		image: "images/signs/bumpy.png",
		imageAlt: "Diamond-shaped yellow sign showing a bumpy surface",
		answers: [
			{ text: "Road construction ahead", correct: false },
			{ text: "Bumpy or uneven pavement ahead", correct: true },
			{ text: "Gravel road ahead", correct: false },
			{ text: "Speed bump ahead", correct: false },
		],
	},
	{
		question: "What does this sign mean?",
		image: "images/signs/merge.png",
		imageAlt: "Diamond-shaped yellow sign with merging arrows",
		answers: [
			{ text: "Lane ends", correct: false },
			{ text: "Merge with traffic", correct: true },
			{ text: "Two-way traffic", correct: false },
			{ text: "Pass with caution", correct: false },
		],
	},
	{
		question: "What does this sign mean?",
		image: "images/signs/median.png",
		imageAlt: "Diamond-shaped yellow sign showing a median barrier ahead",
		answers: [
			{ text: "Construction ahead", correct: false },
			{ text: "Median ahead: keep to the right", correct: true },
			{ text: "Divided highway ends", correct: false },
			{ text: "Center lane closed", correct: false },
		],
	},
	{
		question: "What does this sign mean?",
		image: "images/signs/school-cross.png",
		imageAlt:
			"Rectangular yellow sign with two people crossing and an arrow pointing up",
		answers: [
			{ text: "Pedestrian zone", correct: false },
			{ text: "A school crossing ahead", correct: true },
			{ text: "Crosswalk ahead", correct: false },
			{ text: "Children playing", correct: false },
		],
	},
	{
		question: "What does this sign mean?",
		image: "images/signs/bus-stop.png",
		imageAlt:
			"Diamond-shaped yellow sign with a school bus and flashing lights",
		answers: [
			{ text: "School bus route", correct: false },
			{ text: "A hidden school bus stop ahead", correct: true },
			{ text: "School zone", correct: false },
			{ text: "Bus stop ahead", correct: false },
		],
	},
	{
		question: "What does this sign mean?",
		image: "images/signs/lane-ends.png",
		imageAlt: "Diamond-shaped yellow sign showing two lanes merging into one",
		answers: [
			{ text: "Lane ends ahead", correct: false },
			{ text: "Right lane ends ahead", correct: true },
			{ text: "Merge left", correct: false },
			{ text: "Two-way traffic", correct: false },
		],
	},
	{
		question: "What does this sign mean?",
		image: "images/signs/school-zone.png",
		imageAlt: "Pentagon-shaped yellow sign with two people walking",
		answers: [
			{ text: "Pedestrian crossing", correct: false },
			{ text: "School zone sign", correct: true },
			{ text: "Playground ahead", correct: false },
			{ text: "Community center", correct: false },
		],
	},
	{
		question: "What does this sign mean?",
		image: "images/signs/winding.png",
		imageAlt: "Diamond-shaped yellow sign with a curved arrow",
		answers: [
			{ text: "Sharp turn ahead", correct: false },
			{ text: "Winding road", correct: true },
			{ text: "Road curves right", correct: false },
			{ text: "U-turn permitted", correct: false },
		],
	},
	{
		question: "What does this sign mean?",
		image: "images/signs/stop-ahead.png",
		imageAlt:
			"Diamond-shaped yellow sign with a red octagonal stop sign symbol",
		answers: [
			{ text: "Stop sign visible ahead", correct: false },
			{ text: "Stop sign ahead", correct: true },
			{ text: "Four-way stop", correct: false },
			{ text: "Stop for pedestrians", correct: false },
		],
	},
	{
		question: "What does this sign mean?",
		image: "images/signs/steep-hill.png",
		imageAlt:
			"Diamond-shaped yellow sign showing a truck going downhill with a percentage",
		answers: [
			{ text: "Truck route", correct: false },
			{ text: "Steep hill ahead", correct: true },
			{ text: "Truck parking ahead", correct: false },
			{ text: "Slow vehicles must exit", correct: false },
		],
	},
	{
		question: "What does this sign mean?",
		image: "images/signs/narrow-bridge.png",
		imageAlt: "Diamond-shaped yellow sign showing a narrow structure",
		answers: [
			{ text: "Bridge ahead", correct: false },
			{ text: "Narrow bridge ahead", correct: true },
			{ text: "Construction zone", correct: false },
			{ text: "Lane reduction", correct: false },
		],
	},
	{
		question: "What does this sign mean?",
		image: "images/signs/truck-right.png",
		imageAlt:
			"Diamond-shaped yellow sign showing a truck entering from the right",
		answers: [
			{ text: "Truck stop ahead", correct: false },
			{ text: "Truck entrance ahead on the right", correct: true },
			{ text: "No trucks allowed", correct: false },
			{ text: "Truck weighing station", correct: false },
		],
	},
	{
		question: "What does this sign mean?",
		image: "images/signs/y-road.png",
		imageAlt: "Diamond-shaped yellow sign with a Y-shaped road symbol",
		answers: [
			{ text: "Intersection ahead", correct: false },
			{ text: "Road branching off ahead", correct: true },
			{ text: "Divided highway", correct: false },
			{ text: "Merge ahead", correct: false },
		],
	},
	{
		question: "What does this sign mean?",
		image: "images/signs/railway.png",
		imageAlt:
			"Diamond-shaped yellow sign with a railroad crossing symbol (crossbuck)",
		answers: [
			{ text: "Train station ahead", correct: false },
			{ text: "Railway crossing ahead", correct: true },
			{ text: "Streetcar tracks", correct: false },
			{ text: "Level crossing", correct: false },
		],
	},
	{
		question: "What does this sign mean?",
		image: "images/signs/bike-cross.png",
		imageAlt: "Diamond-shaped yellow sign with a bicycle symbol",
		answers: [
			{ text: "Bike lane ahead", correct: false },
			{ text: "Bicycle crossing ahead", correct: true },
			{ text: "Bikes prohibited", correct: false },
			{ text: "Bike path begins", correct: false },
		],
	},
	{
		question: "What does this sign mean?",
		image: "images/signs/sharp-turn.png",
		imageAlt:
			"Diamond-shaped yellow sign with a black and yellow checkered pattern and an arrow",
		answers: [
			{ text: "Caution ahead", correct: false },
			{ text: "Danger, sharp turn", correct: true },
			{ text: "Road work zone", correct: false },
			{ text: "Reduce speed", correct: false },
		],
	},
	{
		question: "What does this sign mean?",
		image: "images/signs/hidden.png",
		imageAlt:
			"Diamond-shaped yellow sign with an upward arrow and the word 'HIDDEN'",
		answers: [
			{ text: "Hidden driveway", correct: false },
			{
				text: "Drivers on the sideroad of the intersection ahead don't have a clear view of traffic",
				correct: true,
			},
			{ text: "Blind spot warning", correct: false },
			{ text: "Hidden speed camera", correct: false },
		],
	},
	{
		question: "What does this sign mean?",
		image: "images/signs/bus-right.png",
		imageAlt:
			"Diamond-shaped yellow sign showing a bus entering from the right",
		answers: [
			{ text: "Bus stop ahead", correct: false },
			{ text: "Bus entrance ahead on the right", correct: true },
			{ text: "School bus route", correct: false },
			{ text: "Transit terminal", correct: false },
		],
	},
	{
		question: "What does this sign mean?",
		image: "images/signs/slippery.png",
		imageAlt: "Diamond-shaped yellow sign showing a car skidding",
		answers: [
			{ text: "Icy road ahead", correct: false },
			{ text: "Pavement is slippery when wet", correct: true },
			{ text: "Sharp curve", correct: false },
			{ text: "Loose gravel", correct: false },
		],
	},
	{
		question: "What does this sign mean?",
		image: "images/signs/fire-truck.png",
		imageAlt:
			"Diamond-shaped yellow sign showing a fire truck entering from the right",
		answers: [
			{ text: "Fire station ahead", correct: false },
			{ text: "Fire truck entrance ahead on the right", correct: true },
			{ text: "Emergency vehicles only", correct: false },
			{ text: "Fire zone", correct: false },
		],
	},
	{
		question: "What does this sign mean?",
		image: "images/signs/curve-60.png",
		imageAlt: "Yellow rectangular sign showing '60 km/h' under a curve warning",
		answers: [
			{ text: "Speed limit 60 km/h", correct: false },
			{ text: "Maximum safe speed for the curve", correct: true },
			{ text: "Minimum speed 60 km/h", correct: false },
			{ text: "Recommended speed", correct: false },
		],
	},

	// REGULATORY SIGNS
	{
		question: "What does this sign mean?",
		image: "images/signs/railroad-x.png",
		imageAlt:
			"Diamond-shaped yellow sign with black checkered pattern and an X",
		answers: [
			{ text: "Road closed ahead", correct: false },
			{ text: "You are approaching a railroad crossing", correct: true },
			{ text: "Danger zone", correct: false },
			{ text: "Construction area", correct: false },
		],
	},
	{
		question: "What does this sign mean?",
		image: "images/signs/slow-right.png",
		imageAlt: "White rectangular sign that says 'SLOWER TRAFFIC KEEP RIGHT'",
		answers: [
			{ text: "Right lane for trucks only", correct: false },
			{ text: "Slow traffic must keep right", correct: true },
			{ text: "Speed limit changes ahead", correct: false },
			{ text: "Passing lane ends", correct: false },
		],
	},
	{
		question: "What does this sign mean?",
		image: "images/signs/bike-lane.png",
		imageAlt: "White sign with a diamond, bicycle symbol, and downward arrow",
		answers: [
			{ text: "Bicycle parking ahead", correct: false },
			{ text: "This lane is for bicycles only", correct: true },
			{ text: "Bicycles must exit", correct: false },
			{ text: "Shared bike lane", correct: false },
		],
	},
	{
		question: "What does this sign mean?",
		image: "images/signs/two-way-left.png",
		imageAlt: "Black sign with white arrows pointing left and curving right",
		answers: [
			{ text: "Left turn only", correct: false },
			{ text: "Two-way left turn lane", correct: true },
			{ text: "U-turns permitted", correct: false },
			{ text: "Merge left", correct: false },
		],
	},
	{
		question: "What does this sign mean?",
		image: "images/signs/no-block.png",
		imageAlt: "White rectangular sign that says 'DO NOT BLOCK INTERSECTION'",
		answers: [
			{ text: "Stop ahead", correct: false },
			{ text: "Do not block intersection", correct: true },
			{ text: "No parking in intersection", correct: false },
			{ text: "Yield to cross traffic", correct: false },
		],
	},
	{
		question: "What does this sign mean?",
		image: "images/signs/keep-right.png",
		imageAlt:
			"Black square sign with white arrows showing a curved lane and straight lane",
		answers: [
			{ text: "Lane choice ahead", correct: false },
			{ text: "Keep to the right lane, except when passing", correct: true },
			{ text: "Two-lane highway", correct: false },
			{ text: "Passing permitted", correct: false },
		],
	},
	{
		question: "What does this sign mean?",
		image: "images/signs/directions.png",
		imageAlt: "Black sign with white arrows pointing in different directions",
		answers: [
			{ text: "Multiple exits ahead", correct: false },
			{
				text: "These signs tell drivers the direction they must travel",
				correct: true,
			},
			{ text: "Intersection ahead", correct: false },
			{ text: "Choose your lane", correct: false },
		],
	},
	{
		question: "What does this sign mean?",
		image: "images/signs/safety-zone.png",
		imageAlt: "White sign that says 'COMMUNITY SAFETY ZONE FINES INCREASED'",
		answers: [
			{ text: "Police monitoring area", correct: false },
			{
				text: "Be more aware of pedestrians and your speed in this area",
				correct: true,
			},
			{ text: "School zone", correct: false },
			{ text: "Speed trap ahead", correct: false },
		],
	},
	{
		question: "What does this sign mean?",
		image: "images/signs/speed-50.png",
		imageAlt: "White rectangular sign with a large '50' and the word 'MAXIMUM'",
		answers: [
			{ text: "Minimum speed 50 km/h", correct: false },
			{
				text: "Speed limit changes ahead, with maximum speed of 50 km/h",
				correct: true,
			},
			{ text: "Average speed 50 km/h", correct: false },
			{ text: "50 metre zone", correct: false },
		],
	},
	{
		question: "What does this sign mean?",
		image: "images/signs/bus-zone.png",
		imageAlt: "White sign that says 'SCHOOL BUS LOADING ZONE' with an arrow",
		answers: [
			{ text: "School bus stop only", correct: false },
			{ text: "School buses load and unload in this area", correct: true },
			{ text: "No parking during school hours", correct: false },
			{ text: "Buses only", correct: false },
		],
	},
	{
		question: "What does this sign mean?",
		image: "images/signs/island-right.png",
		imageAlt: "White sign showing a curved lane with an arrow pointing right",
		answers: [
			{ text: "Sharp turn ahead", correct: false },
			{ text: "Keep to the right of the traffic island", correct: true },
			{ text: "Right lane ends", correct: false },
			{ text: "Merge right", correct: false },
		],
	},
	{
		question: "What does this sign mean?",
		image: "images/signs/right-only.png",
		imageAlt:
			"White sign with a black curved arrow pointing right and the word 'ONLY'",
		answers: [
			{ text: "Right turn permitted", correct: false },
			{ text: "Lane usage sign meaning right turn only", correct: true },
			{ text: "Keep right", correct: false },
			{ text: "Exit only", correct: false },
		],
	},
	{
		question: "What does this sign mean?",
		image: "images/signs/one-way.png",
		imageAlt: "White sign with a black arrow pointing right",
		answers: [
			{ text: "Turn right ahead", correct: false },
			{ text: "Traffic must travel in one direction only", correct: true },
			{ text: "Right turn permitted", correct: false },
			{ text: "Keep to the right", correct: false },
		],
	},
	{
		question: "What does this sign mean?",
		image: "images/signs/speed-80.png",
		imageAlt: "White rectangular sign showing '80' in large numbers",
		answers: [
			{ text: "Minimum speed 80 km/h", correct: false },
			{ text: "Shows maximum speed limit on the highway", correct: true },
			{ text: "Highway number 80", correct: false },
			{ text: "80 kilometre zone", correct: false },
		],
	},
	{
		question: "What does this sign mean?",
		image: "images/signs/lane-exit.png",
		imageAlt: "Black rectangular sign that says 'RIGHT LANE MUST EXIT'",
		answers: [
			{ text: "Right lane closed ahead", correct: false },
			{ text: "You must exit if you remain in right-hand lane", correct: true },
			{ text: "Exit on right", correct: false },
			{ text: "Right turn only", correct: false },
		],
	},
	{
		question: "What does this sign mean?",
		image: "images/signs/stop-bus.png",
		imageAlt:
			"White sign that says 'STOP FOR SCHOOL BUS WHEN SIGNALS FLASHING'",
		answers: [
			{ text: "School zone ahead", correct: false },
			{
				text: "You must stop if a school bus has flashing signals",
				correct: true,
			},
			{ text: "Bus stop ahead", correct: false },
			{ text: "Reduce speed near schools", correct: false },
		],
	},
	{
		question: "What does this sign mean?",
		image: "images/signs/no-straight.png",
		imageAlt: "White sign with a red circle and slash over an upward arrow",
		answers: [
			{ text: "No U-turn", correct: false },
			{ text: "Do not drive straight through the intersection", correct: true },
			{ text: "One way street", correct: false },
			{ text: "No entry", correct: false },
		],
	},
	{
		question: "What does this sign mean?",
		image: "images/signs/camera.png",
		imageAlt:
			"White sign showing a camera and traffic light with 'RED LIGHT PHOTO ENFORCED'",
		answers: [
			{ text: "Speed camera ahead", correct: false },
			{ text: "Red light camera at intersection", correct: true },
			{ text: "Security cameras in use", correct: false },
			{ text: "Toll booth ahead", correct: false },
		],
	},
	{
		question: "What does this sign mean?",
		image: "images/signs/no-left-times.png",
		imageAlt:
			"White sign with a red circle and slash over a left-turning arrow, showing times '7AM-9AM 4PM-6PM MON-FRI'",
		answers: [
			{ text: "No parking during these times", correct: false },
			{ text: "Do not turn left during the times shown", correct: true },
			{ text: "Left lane closed", correct: false },
			{ text: "No entry during rush hour", correct: false },
		],
	},
	{
		question: "What does this sign mean?",
		image: "images/signs/no-stop.png",
		imageAlt: "White sign with red circle and arrows pointing both ways",
		answers: [
			{ text: "No passing zone", correct: false },
			{ text: "Do not stop in the area between the signs", correct: true },
			{ text: "Two-way traffic", correct: false },
			{ text: "No U-turn", correct: false },
		],
	},
	{
		question: "What does this sign mean?",
		image: "images/signs/no-left.png",
		imageAlt:
			"White sign with a red circle and slash over a left-turning arrow",
		answers: [
			{ text: "No U-turn", correct: false },
			{ text: "You must not make a left turn", correct: true },
			{ text: "Left lane closed", correct: false },
			{ text: "Keep right", correct: false },
		],
	},
	{
		question: "What does this sign mean?",
		image: "images/signs/no-right-red.png",
		imageAlt:
			"Two signs - one with a red circle and slash over 'R', another saying 'ON RED'",
		answers: [
			{ text: "No right turn at any time", correct: false },
			{ text: "No right turn on red", correct: true },
			{ text: "Red light ahead", correct: false },
			{ text: "Right lane ends", correct: false },
		],
	},
	{
		question: "What does this sign mean?",
		image: "images/signs/no-ped.png",
		imageAlt: "White sign with a red circle and slash over a pedestrian symbol",
		answers: [
			{ text: "Crosswalk ahead", correct: false },
			{ text: "No pedestrians allowed", correct: true },
			{ text: "Pedestrian zone", correct: false },
			{ text: "School crossing", correct: false },
		],
	},
	{
		question: "What does this sign mean?",
		image: "images/signs/yield.png",
		imageAlt: "Red and white triangular yield sign",
		answers: [
			{ text: "Stop and proceed", correct: false },
			{ text: "You must give the right-of-way", correct: true },
			{ text: "Caution ahead", correct: false },
			{ text: "Merge with traffic", correct: false },
		],
	},
	{
		question: "What does this sign mean?",
		image: "images/signs/no-bike.png",
		imageAlt: "White sign with a red circle and slash over a bicycle symbol",
		answers: [
			{ text: "Bike lane ends", correct: false },
			{ text: "No bicycles allowed on this road", correct: true },
			{ text: "Bicycle crossing ahead", correct: false },
			{ text: "Shared roadway", correct: false },
		],
	},
	{
		question: "What does this sign mean?",
		image: "images/signs/no-pass.png",
		imageAlt:
			"White sign with a red circle and slash over two cars side by side",
		answers: [
			{ text: "No parking", correct: false },
			{ text: "Passing is not allowed", correct: true },
			{ text: "Single lane ahead", correct: false },
			{ text: "No overtaking trucks", correct: false },
		],
	},
	{
		question: "What does this sign mean?",
		image: "images/signs/no-stand.png",
		imageAlt: "Red and white sign that says 'NO STANDING ANY TIME' with arrows",
		answers: [
			{ text: "No parking", correct: false },
			{ text: "Do not stand or stop in this area", correct: true },
			{ text: "Pedestrians must keep moving", correct: false },
			{ text: "Loading zone", correct: false },
		],
	},
	{
		question: "What does this sign mean?",
		image: "images/signs/no-u.png",
		imageAlt: "White sign with a red circle and slash over a U-turn arrow",
		answers: [
			{ text: "No left turn", correct: false },
			{ text: "You must not make a U-turn", correct: true },
			{ text: "One-way street", correct: false },
			{ text: "No backing up", correct: false },
		],
	},
	{
		question: "What does this sign mean?",
		image: "images/signs/no-idle.png",
		imageAlt: "White sign with 'NO IDLING 3 MIN IDLE LIMIT' and engine symbol",
		answers: [
			{ text: "No parking for 3 minutes", correct: false },
			{ text: "No idling for more than 3 minutes", correct: true },
			{ text: "Maximum stop time 3 minutes", correct: false },
			{ text: "Loading zone 3 minutes", correct: false },
		],
	},
	{
		question: "What does this sign mean?",
		image: "images/signs/no-enter.png",
		imageAlt: "Red circle with a white horizontal bar",
		answers: [
			{ text: "Stop sign", correct: false },
			{ text: "Keep out (do not enter)", correct: true },
			{ text: "No parking", correct: false },
			{ text: "Road closed", correct: false },
		],
	},
	{
		question: "What does this sign mean?",
		image: "images/signs/stop.png",
		imageAlt: "Red octagonal STOP sign",
		answers: [
			{ text: "Slow down and proceed with caution", correct: false },
			{
				text: "Stop and yield the right-of-way to passing vehicles from both directions",
				correct: true,
			},
			{ text: "Stop for pedestrians only", correct: false },
			{ text: "Stop during school hours", correct: false },
		],
	},
	{
		question: "What does this sign mean?",
		image: "images/signs/no-pass-cross.png",
		imageAlt: "Pedestrian X symbol with 'NO PASSING HERE TO CROSSING' text",
		answers: [
			{ text: "Pedestrian crossing ahead", correct: false },
			{
				text: "Do not pass any vehicles within 30 metres of a pedestrian crossing",
				correct: true,
			},
			{ text: "School zone", correct: false },
			{ text: "No pedestrians beyond this point", correct: false },
		],
	},
	{
		question: "What does this sign mean?",
		image: "images/signs/disabled.png",
		imageAlt:
			"White sign with wheelchair symbol, red circle with 'P' and slash, and 'BY PERMIT ONLY'",
		answers: [
			{ text: "Wheelchair accessible parking", correct: false },
			{
				text: "Only for vehicles displaying a valid disabled person parking permit",
				correct: true,
			},
			{ text: "No parking for disabled persons", correct: false },
			{ text: "Hospital parking", correct: false },
		],
	},
	{
		question: "What does this sign mean?",
		image: "images/signs/bus-arm.png",
		imageAlt: "School bus stop arm with flashing red lights",
		answers: [
			{ text: "School bus route", correct: false },
			{ text: "You must stop and are prohibited from passing", correct: true },
			{ text: "Bus stop ahead", correct: false },
			{ text: "School zone active", correct: false },
		],
	},
	{
		question: "What does this sign mean?",
		image: "images/signs/parking-2h.png",
		imageAlt: "Green sign with 'P' and '2h 9AM-6PM MON-FRI' with arrows",
		answers: [
			{ text: "2-hour maximum parking anytime", correct: false },
			{
				text: "You may park in the designated area during the posted times",
				correct: true,
			},
			{ text: "Pay parking for 2 hours", correct: false },
			{ text: "Parking meter required", correct: false },
		],
	},
	{
		question: "What does this sign mean?",
		image: "images/signs/bike-route.png",
		imageAlt: "White sign with a green circle containing a bicycle symbol",
		answers: [
			{ text: "Bicycle lane ahead", correct: false },
			{ text: "This road is an official bicycle route", correct: true },
			{ text: "Bicycles only", correct: false },
			{ text: "Bike rental", correct: false },
		],
	},
	{
		question: "What does this sign mean?",
		image: "images/signs/snowmobile.png",
		imageAlt: "White sign with a green circle containing a snowmobile symbol",
		answers: [
			{ text: "Snowmobile parking", correct: false },
			{ text: "Snowmobiles may use this road", correct: true },
			{ text: "Snowmobile crossing", correct: false },
			{ text: "Winter recreation area", correct: false },
		],
	},
	{
		question: "What does this sign mean?",
		image: "images/signs/permit.png",
		imageAlt: "White sign with a green circle (empty)",
		answers: [
			{ text: "Go ahead", correct: false },
			{
				text: "Permissive sign - you may or must do the activity shown",
				correct: true,
			},
			{ text: "Green light ahead", correct: false },
			{ text: "Proceed with caution", correct: false },
		],
	},

	// INFORMATION AND DIRECTION SIGNS
	{
		question: "What does this sign mean?",
		image: "images/signs/disabled-park.png",
		imageAlt: "Blue and orange sign with a wheelchair symbol",
		answers: [
			{ text: "Hospital ahead", correct: false },
			{
				text: "Survey crew area - only for disabled (handicapped) person parking",
				correct: true,
			},
			{ text: "Wheelchair repair", correct: false },
			{ text: "Accessibility information", correct: false },
		],
	},
	{
		question: "What does this sign mean?",
		image: "images/signs/roundabout.png",
		imageAlt: "Green directional sign showing multiple exits and town names",
		answers: [
			{ text: "Highway map", correct: false },
			{
				text: "The upcoming roundabout exits and where they will take you",
				correct: true,
			},
			{ text: "Rest stop information", correct: false },
			{ text: "City limits", correct: false },
		],
	},
	{
		question: "What does this sign mean?",
		image: "images/signs/destination.png",
		imageAlt: "Black and orange sign with arrows and road names",
		answers: [
			{ text: "Detour route", correct: false },
			{ text: "Destination control board ahead", correct: true },
			{ text: "Street directory", correct: false },
			{ text: "Intersection guide", correct: false },
		],
	},
	{
		question: "What does this sign mean?",
		image: "images/signs/hospital-detour.png",
		imageAlt: "Orange sign with 'H' symbol",
		answers: [
			{ text: "Hospital ahead", correct: false },
			{
				text: "Hospital/detour marker until you return to regular route",
				correct: true,
			},
			{ text: "Helipad", correct: false },
			{ text: "Hotel", correct: false },
		],
	},
	{
		question: "What does this sign mean?",
		image: "images/signs/road-work.png",
		imageAlt: "Orange diamond sign with a worker and shovel symbol",
		answers: [
			{ text: "Construction zone", correct: false },
			{ text: "Road work operation ahead", correct: true },
			{ text: "Maintenance area", correct: false },
			{ text: "Utility work", correct: false },
		],
	},
	{
		question: "What does this sign mean?",
		image: "images/signs/railway-x.png",
		imageAlt: "Large white X on a post",
		answers: [
			{ text: "Road closed", correct: false },
			{ text: "Railway crossing", correct: true },
			{ text: "Intersection ahead", correct: false },
			{ text: "Crosswalk", correct: false },
		],
	},
	{
		question: "What does this sign mean?",
		image: "images/signs/slow-vehicle.png",
		imageAlt: "Orange/red triangle",
		answers: [
			{ text: "Yield sign", correct: false },
			{ text: "Slow moving vehicle", correct: true },
			{ text: "Construction ahead", correct: false },
			{ text: "Caution", correct: false },
		],
	},
	{
		question: "What does this sign mean?",
		image: "images/signs/hov-2.png",
		imageAlt: "White sign with diamond symbol, bus, number 2, and down arrow",
		answers: [
			{ text: "Bus route 2", correct: false },
			{
				text: "Two or more passengers must be in the vehicle to use this HOV lane",
				correct: true,
			},
			{ text: "Bus stop 2", correct: false },
			{ text: "2 buses maximum", correct: false },
		],
	},
	{
		question: "What does this sign mean?",
		image: "images/signs/no-cross-hov.png",
		imageAlt: "Sign with diagonal stripes and text 'Do Not Cross'",
		answers: [
			{ text: "No crossing allowed anywhere", correct: false },
			{
				text: "Vehicles cannot change lanes into or out of a HOV lane in this area",
				correct: true,
			},
			{ text: "Pedestrian crossing prohibited", correct: false },
			{ text: "Road closed ahead", correct: false },
		],
	},
];
// ==================== RULES, LIMITS & POINTS QUESTIONS (70) ====================
export const RULES_AND_LIMITS_QUESTIONS = [
	{
		question:
			"If you are convicted of failing to remain at the scene of a collision, how many demerit points will be added to your driving record?",
		answers: [
			{ text: "3 points", correct: false },
			{ text: "5 points", correct: false },
			{ text: "7 points", correct: true },
			{ text: "9 points", correct: false },
		],
	},
	{
		question:
			"If you are convicted of following too closely (tailgating), how many demerit points will be added to your driving record?",
		answers: [
			{ text: "2 points", correct: false },
			{ text: "3 points", correct: false },
			{ text: "4 points", correct: true },
			{ text: "6 points", correct: false },
		],
	},
	{
		question:
			"If you are found guilty of improper passing, how many demerit points will be added to your driving record?",
		answers: [
			{ text: "2 points", correct: false },
			{ text: "3 points", correct: true },
			{ text: "4 points", correct: false },
			{ text: "6 points", correct: false },
		],
	},
	{
		question:
			"If you are found guilty of carrying a child passenger who is not properly secured, how many demerit points will be added to your driving record?",
		answers: [
			{ text: "2 points", correct: true },
			{ text: "3 points", correct: false },
			{ text: "4 points", correct: false },
			{ text: "6 points", correct: false },
		],
	},
	{
		question:
			"A new driver has up to how long to complete the graduated licensing process?",
		answers: [
			{ text: "2 years", correct: false },
			{ text: "3 years", correct: false },
			{ text: "5 years", correct: true },
			{ text: "10 years", correct: false },
		],
	},
	{
		question:
			"If a new driver accumulates how many demerit points will they be sent a warning letter?",
		answers: [
			{ text: "2 to 5 points", correct: true },
			{ text: "6 to 8 points", correct: false },
			{ text: "9 to 14 points", correct: false },
			{ text: "15 or more points", correct: false },
		],
	},
	{
		question:
			"How many passengers is a G2 driver who is at least 20 years old allowed to carry in their vehicle?",
		answers: [
			{ text: "Only 1 passenger", correct: false },
			{ text: "Up to 3 passengers aged 19 or under", correct: false },
			{
				text: "As many passengers as there are working seatbelts",
				correct: true,
			},
			{ text: "No passengers after midnight", correct: false },
		],
	},
	{
		question:
			"You must hold a G2 licence for at least how long before you may take the G2 road test for a full G licence?",
		answers: [
			{ text: "6 months", correct: false },
			{ text: "8 months", correct: false },
			{ text: "12 months", correct: true },
			{ text: "24 months", correct: false },
		],
	},
	{
		question:
			"What must you bring to your G2 (Level Two) road test for a full G licence?",
		answers: [
			{ text: "Your birth certificate", correct: false },
			{ text: "Your G2 licence", correct: true },
			{ text: "Your insurance documents", correct: false },
			{ text: "Your G1 licence", correct: false },
		],
	},
	{
		question:
			"You may NOT park within how many metres of the nearest rail of a level railway crossing?",
		answers: [
			{ text: "5 metres", correct: false },
			{ text: "9 metres", correct: false },
			{ text: "15 metres", correct: true },
			{ text: "30 metres", correct: false },
		],
	},
	{
		question:
			"Do NOT park anywhere that you don't have a clear view for at least how many metres in both directions?",
		answers: [
			{ text: "60 metres", correct: false },
			{ text: "90 metres", correct: false },
			{ text: "125 metres", correct: true },
			{ text: "150 metres", correct: false },
		],
	},
	{
		question:
			"If you are convicted of violating Ontario's Move Over law, what penalties will you face for a first offence?",
		answers: [
			{ text: "A warning letter only", correct: false },
			{ text: "A fine of $200-$500 and 2 demerit points", correct: false },
			{ text: "A fine of $400-$2,000 and 3 demerit points", correct: true },
			{
				text: "A fine of $1,000-$4,000 and licence suspension",
				correct: false,
			},
		],
	},
	{
		question:
			"If you are convicted of violating Ontario's Move Over law for the second time within 5 years, what penalties will you face?",
		answers: [
			{ text: "A fine of $400-$2,000 and 3 demerit points", correct: false },
			{
				text: "A fine of $1,000-$4,000, possible jail sentence and possible licence suspension",
				correct: true,
			},
			{ text: "Licence cancellation only", correct: false },
			{ text: "6 demerit points and vehicle impoundment", correct: false },
		],
	},
	{
		question:
			"A novice driver convicted of distracted driving for the third occurrence is subject to what penalty?",
		answers: [
			{ text: "30-day licence suspension", correct: false },
			{ text: "90-day licence suspension", correct: false },
			{
				text: "Licence cancellation and removal from the Graduated Licensing System",
				correct: true,
			},
			{ text: "A fine of up to $5,000", correct: false },
		],
	},
	{
		question:
			"If a fully licensed driver is convicted of distracted driving for the first time, what penalties do they face?",
		answers: [
			{ text: "A warning letter", correct: false },
			{ text: "A fine of up to $1,000 and 3 demerit points", correct: true },
			{ text: "30-day licence suspension", correct: false },
			{ text: "Licence cancellation", correct: false },
		],
	},
	{
		question:
			"A teenage G2 driver with more than 6 months of driving experience may carry how many passengers aged 19 or under between midnight and 5 a.m.?",
		answers: [
			{ text: "No passengers", correct: false },
			{ text: "1 passenger", correct: false },
			{ text: "Up to 3 passengers aged 19 or under", correct: true },
			{ text: "As many as there are seatbelts", correct: false },
		],
	},
	{
		question:
			"As a level one or two driver, if you collect nine or more points during a two-year period, your licence will be suspended for how long?",
		answers: [
			{ text: "30 days", correct: false },
			{ text: "60 days", correct: true },
			{ text: "90 days", correct: false },
			{ text: "1 year", correct: false },
		],
	},
	{
		question:
			"Drivers who don't follow the stopping requirements at a school crossing may receive what penalties?",
		answers: [
			{ text: "A warning", correct: false },
			{ text: "2 demerit points", correct: false },
			{ text: "A substantial fine and 4 demerit points", correct: true },
			{ text: "Licence suspension", correct: false },
		],
	},
	{
		question: "How close to a fire hydrant may you legally park?",
		answers: [
			{ text: "1 metre", correct: false },
			{ text: "Not closer than 3 metres (10 feet)", correct: true },
			{ text: "5 metres", correct: false },
			{ text: "9 metres", correct: false },
		],
	},
	{
		question:
			"When may the Ministry of Transportation suspend a licence after a 9 Demerit Point interview for a fully licensed driver?",
		answers: [
			{ text: "Automatically", correct: false },
			{
				text: "If a driver fails to give satisfactory reasons why their licence should not be suspended",
				correct: true,
			},
			{ text: "Never, it's only a warning", correct: false },
			{ text: "Only if they commit another offence", correct: false },
		],
	},
	{
		question:
			"When a fully-licensed driver accumulates 15 or more demerit points on their record, the driver's licence is suspended:",
		answers: [
			{ text: "After an interview", correct: false },
			{ text: "After 30 days warning", correct: false },
			{
				text: "Automatically, and for 30 days from receipt of the licence by the MTO",
				correct: true,
			},
			{ text: "Only if convicted of another offence", correct: false },
		],
	},
	{
		question:
			"How soon after a licensed driver changes their name or address must they notify the Ministry of Transportation?",
		answers: [
			{ text: "Within 6 days", correct: true },
			{ text: "Within 10 days", correct: false },
			{ text: "Within 30 days", correct: false },
			{ text: "Within 60 days", correct: false },
		],
	},
	{
		question:
			"If you are found guilty of driving around a railway crossing barrier, how many demerit points will be added to your driving record?",
		answers: [
			{ text: "2 points", correct: false },
			{ text: "3 points", correct: true },
			{ text: "4 points", correct: false },
			{ text: "6 points", correct: false },
		],
	},
	{
		question:
			"If a fully licensed driver accumulates 6 demerit points on their driving record, what happens?",
		answers: [
			{ text: "Licence is suspended immediately", correct: false },
			{ text: "The driver will be sent a warning letter", correct: true },
			{ text: "Driver must attend an interview", correct: false },
			{ text: "Nothing happens", correct: false },
		],
	},
	{
		question:
			"If you are convicted of a driving offence in another province, what happens?",
		answers: [
			{
				text: "Nothing, it doesn't affect your Ontario record",
				correct: false,
			},
			{
				text: "Demerit points will be added to your record as if the offence had occurred in Ontario",
				correct: true,
			},
			{ text: "Only a fine is applied", correct: false },
			{ text: "Your licence is suspended", correct: false },
		],
	},
	{
		question:
			"While you hold a G1 licence, you may NOT drive between what hours?",
		answers: [
			{ text: "10 p.m. and 6 a.m.", correct: false },
			{ text: "11 p.m. and 5 a.m.", correct: false },
			{ text: "Midnight and 5 a.m.", correct: true },
			{ text: "1 a.m. and 6 a.m.", correct: false },
		],
	},
	{
		question:
			"Do you have to be supervised when driving at night with your G2 licence?",
		answers: [
			{ text: "Yes, always", correct: false },
			{ text: "Yes, between midnight and 5 a.m.", correct: false },
			{
				text: "No, you can drive unsupervised at any time of day or night",
				correct: true,
			},
			{ text: "Only if you're under 19", correct: false },
		],
	},
	{
		question:
			"If you have a G1 licence and complete a government-approved beginner driver education course, you may take your G1 road test after holding your G1 licence for at least:",
		answers: [
			{ text: "6 months", correct: false },
			{ text: "8 months", correct: true },
			{ text: "10 months", correct: false },
			{ text: "12 months", correct: false },
		],
	},
	{
		question: "Both the G1 and G2 road tests will test you on:",
		answers: [
			{ text: "Vehicle maintenance", correct: false },
			{ text: "How safe your driving is", correct: true },
			{ text: "Parking only", correct: false },
			{ text: "Highway driving only", correct: false },
		],
	},
	{
		question:
			"To obtain a G1 licence, you must be at least 16 years old and pass:",
		answers: [
			{ text: "Only an eye test", correct: false },
			{ text: "An eye test and a knowledge test", correct: true },
			{ text: "A road test", correct: false },
			{ text: "A written test only", correct: false },
		],
	},
	{
		question: "You may NOT park within how many metres of a bridge?",
		answers: [
			{ text: "50 metres", correct: false },
			{ text: "100 metres", correct: true },
			{ text: "150 metres", correct: false },
			{ text: "200 metres", correct: false },
		],
	},
	{
		question:
			"Under Ontario's Move Over law, you are required to change lanes if safe when passing a stopped emergency vehicle:",
		answers: [
			{ text: "At any time", correct: false },
			{ text: "With its lights flashing", correct: true },
			{ text: "Only during the day", correct: false },
			{ text: "Only on highways", correct: false },
		],
	},
	{
		question:
			"Failing to stop for a school bus that is unloading passengers will result in:",
		answers: [
			{ text: "3 demerit points and a fine up to $500", correct: false },
			{ text: "4 demerit points and a fine up to $1,000", correct: false },
			{
				text: "6 demerit points and a maximum fine of up to $2,000",
				correct: true,
			},
			{ text: "7 demerit points and licence suspension", correct: false },
		],
	},
	{
		question:
			"If an accompanying driver is older than 22, their blood alcohol level must be less than:",
		answers: [
			{ text: "0.00%", correct: false },
			{ text: "0.05%", correct: true },
			{ text: "0.08%", correct: false },
			{ text: "0.10%", correct: false },
		],
	},
	{
		question:
			"If you are convicted for the first time of driving while your licence is suspended, what penalties will you face?",
		answers: [
			{ text: "Only a fine", correct: false },
			{
				text: "Either jail time or a fine or both, plus an additional six-month suspension",
				correct: true,
			},
			{ text: "Licence cancellation", correct: false },
			{ text: "Vehicle impoundment only", correct: false },
		],
	},
	{
		question:
			"Unless otherwise posted, the maximum speed limit allowed in cities, towns, villages, and built-up areas is:",
		answers: [
			{ text: "40 km/h", correct: false },
			{ text: "50 km/h", correct: true },
			{ text: "60 km/h", correct: false },
			{ text: "80 km/h", correct: false },
		],
	},
	{
		question:
			"When lights are required, drivers must switch from high-beam lights to low beams when following another vehicle within:",
		answers: [
			{ text: "30 metres", correct: false },
			{ text: "60 metres (200 feet)", correct: true },
			{ text: "90 metres", correct: false },
			{ text: "150 metres", correct: false },
		],
	},
	{
		question:
			"When lights are required, drivers must use low-beam headlights within what distance of an oncoming vehicle?",
		answers: [
			{ text: "60 metres", correct: false },
			{ text: "100 metres", correct: false },
			{ text: "150 metres", correct: true },
			{ text: "200 metres", correct: false },
		],
	},
	{
		question:
			"When passing a cyclist, leave at least what distance between your vehicle and the cyclist?",
		answers: [
			{ text: "0.5 metres", correct: false },
			{ text: "1 metre", correct: true },
			{ text: "1.5 metres", correct: false },
			{ text: "2 metres", correct: false },
		],
	},
	{
		question:
			"Demerit points stay on your driving record for how long from the date of the offence?",
		answers: [
			{ text: "1 year", correct: false },
			{ text: "2 years", correct: true },
			{ text: "3 years", correct: false },
			{ text: "5 years", correct: false },
		],
	},
	{
		question:
			"Are demerit points added to your driving record only for offences committed in Canada?",
		answers: [
			{ text: "True", correct: false },
			{
				text: "False - they can be added for offences in New York, Michigan, and any Canadian province",
				correct: true,
			},
			{ text: "True, but only for Ontario offences", correct: false },
			{ text: "False - only for offences in Ontario", correct: false },
		],
	},
	{
		question:
			"If you are convicted of driving 30 to 49 km/h over the posted speed limit, how many demerit points will be added?",
		answers: [
			{ text: "2 points", correct: false },
			{ text: "3 points", correct: false },
			{ text: "4 points", correct: true },
			{ text: "6 points", correct: false },
		],
	},
	{
		question:
			"Fully licensed drivers are allowed to use handheld cell phones while driving:",
		answers: [
			{ text: "True", correct: false },
			{ text: "False - not allowed", correct: true },
			{ text: "Only in emergencies", correct: false },
			{ text: "Only when stopped at a red light", correct: false },
		],
	},
	{
		question:
			"If you are found guilty of backing on a highway or driving too slowly, how many demerit points will be added?",
		answers: [
			{ text: "2 points", correct: true },
			{ text: "3 points", correct: false },
			{ text: "4 points", correct: false },
			{ text: "6 points", correct: false },
		],
	},
	{
		question:
			"If you are under 20 years of age and have held your G2 licence for at least six months, you:",
		answers: [
			{ text: "May carry only one passenger aged 19 or under", correct: false },
			{
				text: "May carry up to three unrelated passengers ages 19 or under",
				correct: true,
			},
			{
				text: "May carry as many passengers as there are seatbelts",
				correct: false,
			},
			{ text: "May not carry any passengers", correct: false },
		],
	},
	{
		question:
			"If you fail to surrender your licence after it has been suspended for accumulating excessive points, you may lose your licence for up to:",
		answers: [
			{ text: "6 months", correct: false },
			{ text: "1 year", correct: false },
			{ text: "2 years", correct: true },
			{ text: "5 years", correct: false },
		],
	},
	{
		question:
			"A G1, G2, M1, or M2 driver may be required to attend an interview when how many demerit points have been accumulated?",
		answers: [
			{ text: "2 points", correct: false },
			{ text: "4 points", correct: false },
			{ text: "6 points", correct: true },
			{ text: "9 points", correct: false },
		],
	},
	{
		question: "G1 licence holders may NOT drive:",
		answers: [
			{ text: "At any time", correct: false },
			{ text: "Between midnight and 5 a.m.", correct: false },
			{
				text: "On high-speed expressways unless accompanied by a driving instructor",
				correct: true,
			},
			{ text: "With any passengers", correct: false },
		],
	},
	{
		question:
			"While you hold a G1 licence, your blood alcohol level may not exceed what amount?",
		answers: [
			{ text: "0.00% (zero)", correct: true },
			{ text: "0.02%", correct: false },
			{ text: "0.05%", correct: false },
			{ text: "0.08%", correct: false },
		],
	},
	{
		question:
			"You may NOT park within how many metres of an intersection that is NOT controlled by traffic lights?",
		answers: [
			{ text: "3 metres", correct: false },
			{ text: "6 metres", correct: false },
			{ text: "9 metres", correct: true },
			{ text: "15 metres", correct: false },
		],
	},
	{
		question: "The penalty for improper HOV lane use is:",
		answers: [
			{ text: "$85 fine and 2 demerit points", correct: false },
			{ text: "$110 fine and 3 demerit points", correct: true },
			{ text: "$200 fine and 4 demerit points", correct: false },
			{ text: "$500 fine and licence suspension", correct: false },
		],
	},
	{
		question: "Do NOT park wherever you would block:",
		answers: [
			{ text: "A driveway only", correct: false },
			{ text: "A sidewalk, crosswalk or road entrance", correct: true },
			{ text: "Another vehicle's view", correct: false },
			{ text: "A fire route", correct: false },
		],
	},
	{
		question:
			"If a fully licensed driver accumulates between 9 and 14 demerit points on their driving record:",
		answers: [
			{ text: "Licence is suspended immediately", correct: false },
			{ text: "Driver receives a warning letter only", correct: false },
			{
				text: "The driver's licence may be suspended, they may have to attend an interview, and may have to pay a $50 fee",
				correct: true,
			},
			{ text: "Nothing happens", correct: false },
		],
	},
	{
		question:
			"If you are a driver aged 19 or under and within the first six months of receiving your G2 licence, how many passengers aged 19 or under are you allowed to carry between midnight and 5 a.m.?",
		answers: [
			{ text: "No passengers aged 19 or under", correct: false },
			{
				text: "1 passenger aged 19 or under (no restrictions for passengers 20 and over)",
				correct: true,
			},
			{ text: "Up to 3 passengers aged 19 or under", correct: false },
			{ text: "As many as there are seatbelts", correct: false },
		],
	},
	{
		question:
			"When approaching a railway crossing at which an electrical or mechanical signal device is warning of the approach of a train, you must:",
		answers: [
			{ text: "Slow down and proceed with caution", correct: false },
			{
				text: "Stop not less than 5 metres (15 feet) from the nearest rail",
				correct: true,
			},
			{
				text: "Stop not less than 10 metres from the nearest rail",
				correct: false,
			},
			{ text: "Increase speed to clear the crossing quickly", correct: false },
		],
	},
	{
		question:
			"When does the law require the headlights on vehicles to be turned on?",
		answers: [
			{ text: "Only at night", correct: false },
			{ text: "Between sunset and sunrise only", correct: false },
			{
				text: "Between half an hour before sunset to half an hour after sunrise and any other time you cannot see clearly for 150 metres",
				correct: true,
			},
			{ text: "Whenever it's raining", correct: false },
		],
	},
	{
		question:
			"When passing a cyclist, failing to leave a minimum 1 metre between you and the cyclist may result in a fine and how many demerit points?",
		answers: [
			{ text: "2 demerit points", correct: true },
			{ text: "3 demerit points", correct: false },
			{ text: "4 demerit points", correct: false },
			{ text: "6 demerit points", correct: false },
		],
	},
	{
		question:
			"Which offences will result in six demerit points being added to your driving record?",
		answers: [
			{ text: "Speeding 30-49 km/h over the limit", correct: false },
			{
				text: "Failing to stop for a school bus, racing, or driving 50 km/h or more over the posted speed limit",
				correct: true,
			},
			{ text: "Running a red light", correct: false },
			{ text: "Improper lane change", correct: false },
		],
	},
	{
		question:
			"If you are found guilty of which offences will three demerit points be added to your driving record?",
		answers: [
			{ text: "Speeding 16-29 km/h over the limit", correct: false },
			{
				text: "Failing to obey a stop sign, to report a collision or to yield the right-of-way",
				correct: true,
			},
			{ text: "Driving without insurance", correct: false },
			{ text: "Distracted driving", correct: false },
		],
	},
	{
		question:
			"While you hold a G1 licence, you may only drive with another driver who:",
		answers: [
			{ text: "Holds any valid licence", correct: false },
			{ text: "Is over 25 years old", correct: false },
			{
				text: "Holds a full G licence, has at least four years of driving experience and is the only passenger in the front seat",
				correct: true,
			},
			{ text: "Holds a G2 licence with 2 years experience", correct: false },
		],
	},
	{
		question: "A person whose driver's licence is under suspension may:",
		answers: [
			{ text: "Drive in emergencies only", correct: false },
			{ text: "Drive with supervision", correct: false },
			{
				text: "Not operate a motor vehicle under any conditions",
				correct: true,
			},
			{ text: "Drive during daytime only", correct: false },
		],
	},
	{
		question:
			"If you are found guilty of going the wrong way on a one-way road, how many demerit points will be added?",
		answers: [
			{ text: "2 points", correct: false },
			{ text: "3 points", correct: true },
			{ text: "4 points", correct: false },
			{ text: "6 points", correct: false },
		],
	},
	{
		question:
			"All vehicles must be insured for third-party liability for at least:",
		answers: [
			{ text: "$100,000", correct: false },
			{ text: "$200,000", correct: true },
			{ text: "$500,000", correct: false },
			{ text: "$1,000,000", correct: false },
		],
	},
	{
		question:
			"As a Level 2 (G2) driver, your blood alcohol level must not be over:",
		answers: [
			{ text: "0.00%", correct: true },
			{ text: "0.02%", correct: false },
			{ text: "0.05%", correct: false },
			{ text: "0.08%", correct: false },
		],
	},
	{
		question:
			"If a police officer signals you to pull over and you do not obey, you might:",
		answers: [
			{ text: "Receive a warning", correct: false },
			{
				text: "Have your licence suspended, pay up to a $25,000 fine and/or serve time in prison",
				correct: true,
			},
			{ text: "Get 3 demerit points", correct: false },
			{ text: "Lose your vehicle registration", correct: false },
		],
	},
	{
		question:
			"New drivers caught drinking and driving will receive for the first occurrence:",
		answers: [
			{ text: "A warning only", correct: false },
			{
				text: "An immediate driver's licence suspension at the roadside for 24 hours and, if convicted, a fine of up to $500 and a suspension period of 30 days",
				correct: true,
			},
			{ text: "Licence cancellation", correct: false },
			{ text: "6 demerit points", correct: false },
		],
	},
	{
		question:
			"If you are convicted of careless driving, what penalties can you receive?",
		answers: [
			{ text: "3 demerit points and a fine", correct: false },
			{
				text: "Your licence suspended for up to two years, a fine of up to $2,000 and a jail sentence of up to six months",
				correct: true,
			},
			{ text: "30-day licence suspension only", correct: false },
			{ text: "Vehicle impoundment", correct: false },
		],
	},
	{
		question:
			"Under which of the following conditions is it dangerous and unlawful to make a U-turn?",
		answers: [
			{ text: "At any intersection", correct: false },
			{
				text: "In a curve or on a hill with a clear view of less than 150 metres; on a railway crossing or within 30 metres of one; and within 150 metres of a bridge if the driver's view is obstructed",
				correct: true,
			},
			{ text: "Only on highways", correct: false },
			{ text: "During rush hour", correct: false },
		],
	},
	{
		question:
			"Which penalties can the court impose on a person convicted of driving 50 km/h or more over the speed limit?",
		answers: [
			{ text: "$500 fine and 3 demerit points", correct: false },
			{
				text: "$2,000 to $10,000 fine; jail term of up to 6 months; licence suspension up to 2 years or 6 demerit points",
				correct: true,
			},
			{ text: "Vehicle impoundment only", correct: false },
			{ text: "$1,000 fine and 4 demerit points", correct: false },
		],
	},
	{
		question: "You must report an accident to the police if:",
		answers: [
			{ text: "Any damage occurs", correct: false },
			{
				text: "Someone has been hurt or killed, or damage to vehicles or property exceeds $2,000",
				correct: true,
			},
			{ text: "Damage exceeds $500", correct: false },
			{ text: "Any vehicle needs to be towed", correct: false },
		],
	},
];

// ==================== GENERAL DRIVING QUESTIONS (70) ====================
export const TEST_MODES = {
	officialSimulator: {
		id: "official",
		title: "Official G1 Test Simulator",
		description: "Exact format as the real G1 test: 20 Road Signs + 20 Rules",
		roadSignsCount: 20,
		rulesCount: 20,
		passingScore: 80,
		mustPassBoth: true, // Must pass BOTH sections with 80%+
	},

	roadSignsOnly: {
		id: "roadsigns",
		title: "Road Signs Practice",
		description: "Practice road signs only: 20 questions",
		roadSignsCount: 20,
		rulesCount: 0,
		passingScore: 80,
		mustPassBoth: false,
	},

	rulesOnly: {
		id: "rules",
		title: "Rules, Limits & Points Practice",
		description: "Practice rules, limits, fines and points: 20 questions",
		roadSignsCount: 0,
		rulesCount: 20,
		passingScore: 80,
		mustPassBoth: false,
	},

	marathonMode: {
		id: "marathon",
		title: "Full Study Marathon",
		description: "All questions: 78 Signs + 70 Rules = 148 total",
		roadSignsCount: 78,
		rulesCount: 70,
		passingScore: 80,
		mustPassBoth: false,
	},

	quickPractice: {
		id: "quick",
		title: "Quick Practice (10 questions)",
		description: "Mixed questions for quick review: 5 signs + 5 rules",
		roadSignsCount: 5,
		rulesCount: 5,
		passingScore: 80,
		mustPassBoth: false,
	},
};

// Shuffle array helper
export function shuffleArray(array) {
	const shuffled = [...array];
	for (let i = shuffled.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
	}
	return shuffled;
}

// Generate test based on mode
export function generateTest(modeId) {
	// Find mode by id instead of by key
	const mode = Object.values(TEST_MODES).find((m) => m.id === modeId);

	if (!mode) {
		throw new Error(`Invalid test mode: ${modeId}`);
	}

	let questions = [];

	// Add road signs questions FIRST (like the real test - Section 1)
	if (mode.roadSignsCount > 0) {
		const selectedSigns = shuffleArray(ROAD_SIGNS_QUESTIONS)
			.slice(0, mode.roadSignsCount)
			.map((q) => ({ ...q, category: "roadSigns" }));
		questions.push(...selectedSigns);
	}

	// Add rules questions SECOND (like the real test - Section 2)
	if (mode.rulesCount > 0) {
		const selectedRules = shuffleArray(RULES_AND_LIMITS_QUESTIONS)
			.slice(0, mode.rulesCount)
			.map((q) => ({ ...q, category: "rules" }));
		questions.push(...selectedRules);
	}

	return {
		mode,
		questions,
		roadSignsEnd: mode.roadSignsCount, // Where road signs section ends
		rulesEnd: mode.roadSignsCount + mode.rulesCount, // Where rules section ends
		totalQuestions: questions.length,
		categoryScores: { roadSigns: 0, rules: 0 },
	};
}
