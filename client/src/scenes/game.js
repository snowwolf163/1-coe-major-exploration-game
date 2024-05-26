import CardHandler from "../helpers/CardHandler";
import DeckHandler from "../helpers/DeckHandler";
import GameHandler from "../helpers/GameHandler";
import InteractiveHandler from "../helpers/InteractiveHandler";
import SocketHandler from "../helpers/SocketHandler";
import UIHandler from "../helpers/UIHandler";

//testing

export default class Game extends Phaser.Scene {
	constructor() {
	super({
	  key: "Game",
	});
	}

	preload() {
	this.load.image(
	  "placeholder-card-back",
	  "src/assets/BackCover/card-back.jpg"
	);
	this.load.image("placeholder-card", "src/assets/placeholder-card.png");

	// action cards
	this.load.image("debt-card", "src/assets/ActionCard/debt-card.jpg");
	this.load.image("load-card", "src/assets/ActionCard/load-card.jpg");
	this.load.image("overload-card", "src/assets/ActionCard/overload-card.jpg");
	// this.load.image("reverse-card", "src/assets/ActionCard/reverse-card.jpg");
	this.load.image("skip-card", "src/assets/ActionCard/skip-card.jpg");

	// placeholders for course and major cards for now
	this.load.image("course-card", "src/assets/CourseCard/CS-161.jpg");
	this.load.image("major-card", "src/assets/MajorCard/MajorCS.jpg");

	// major cards
	this.load.image("major-ARE", "src/assets/MajorCard/MajorARE.png");
	this.load.image("major-BEE", "src/assets/MajorCard/MajorBEE.png");
	this.load.image("major-BIOE", "src/assets/MajorCard/MajorBIOE.png");
	this.load.image("major-CE", "src/assets/MajorCard/MajorCE.png");
	this.load.image("major-CEM", "src/assets/MajorCard/MajorCEM.png");
	this.load.image("major-CHE", "src/assets/MajorCard/MajorCHE.png");
	this.load.image("major-CS", "src/assets/MajorCard/MajorCS.png");
	this.load.image("major-ECS", "src/assets/MajorCard/MajorECS.png");
	this.load.image("major-ENVE", "src/assets/MajorCard/MajorENVE.png");
	this.load.image("major-ESE", "src/assets/MajorCard/MajorESE.png");
	this.load.image("major-IE", "src/assets/MajorCard/MajorIE.png");
	this.load.image("major-ME", "src/assets/MajorCard/MajorME.png");
	this.load.image("major-NSE", "src/assets/MajorCard/MajorNSE.png");
	this.load.image("major-RHP", "src/assets/MajorCard/MajorRHP.png");

	// course cards
	// -- ARE courses
	this.load.image("course-ARE310", "src/assets/CourseCard/ARE/ARE-310.png");
	this.load.image("course-ARE311", "src/assets/CourseCard/ARE/ARE-310.png");
	this.load.image("course-ARE341", "src/assets/CourseCard/ARE/ARE-310.png");
	this.load.image("course-ARE361", "src/assets/CourseCard/ARE/ARE-310.png");
	this.load.image("course-ARE418", "src/assets/CourseCard/ARE/ARE-310.png");
	this.load.image("course-ARE419", "src/assets/CourseCard/ARE/ARE-310.png");
	this.load.image("course-ARE451", "src/assets/CourseCard/ARE/ARE-310.png");
	this.load.image("course-ARE461", "src/assets/CourseCard/ARE/ARE-310.png");
	this.load.image("course-ARE462", "src/assets/CourseCard/ARE/ARE-310.png");
	this.load.image("course-CE381", "src/assets/CourseCard/ARE/CE-381.png");
	// -- BEE courses
	this.load.image("course-BEE221", "src/assets/CourseCard/BEE/BEE-221.png");
	this.load.image("course-BEE222", "src/assets/CourseCard/BEE/BEE-222.png");
	this.load.image("course-BEE270", "src/assets/CourseCard/BEE/BEE-270.png");
	this.load.image("course-BEE312", "src/assets/CourseCard/BEE/BEE-312.png");
	this.load.image("course-BEE322", "src/assets/CourseCard/BEE/BEE-322.png");
	this.load.image("course-BEE361", "src/assets/CourseCard/BEE/BEE-361.png");
	this.load.image("course-BEE362", "src/assets/CourseCard/BEE/BEE-362.png");
	this.load.image("course-BEE415", "src/assets/CourseCard/BEE/BEE-415.png");
	this.load.image("course-BEE468", "src/assets/CourseCard/BEE/BEE-468.png");
	this.load.image("course-BEE481", "src/assets/CourseCard/BEE/BEE-481.png");
	this.load.image("course-BEE482", "src/assets/CourseCard/BEE/BEE-482.png");
	this.load.image("course-BEE483", "src/assets/CourseCard/BEE/BEE-483.png");
	// -- BIOE courses
	this.load.image("course-BI231", "src/assets/CourseCard/BIOE/BI-231.png");
	this.load.image("course-BIOE240", "src/assets/CourseCard/BIOE/BIOE-240.png");
	this.load.image("course-BIOE311", "src/assets/CourseCard/BIOE/BIOE-311.png");
	this.load.image("course-BIOE331", "src/assets/CourseCard/BIOE/BIOE-331.png");
	this.load.image("course-BIOE340", "src/assets/CourseCard/BIOE/BIOE-340.png");
	this.load.image("course-BIOE350", "src/assets/CourseCard/BIOE/BIOE-350.png");
	this.load.image("course-BIOE420", "src/assets/CourseCard/BIOE/BIOE-420.png");
	this.load.image("course-BIOE457", "src/assets/CourseCard/BIOE/BIOE-457.png");
	this.load.image("course-BIOE465", "src/assets/CourseCard/BIOE/BIOE-465.png");
	this.load.image("course-CBEE212", "src/assets/CourseCard/BIOE/CBEE-212.png");
	// -- CE courses
	this.load.image("course-CCE201", "src/assets/CourseCard/CE/CCE-201.png");
	this.load.image("course-CCE207", "src/assets/CourseCard/CE/CCE-207.png");
	this.load.image("course-CE202", "src/assets/CourseCard/CE/CE-202.png");
	this.load.image("course-CE311", "src/assets/CourseCard/CE/CE-311.png");
	this.load.image("course-CE313", "src/assets/CourseCard/CE/CE-313.png");
	this.load.image("course-CE361", "src/assets/CourseCard/CE/CE-361.png");
	this.load.image("course-CE371", "src/assets/CourseCard/CE/CE-371.png");
	this.load.image("course-CE372", "src/assets/CourseCard/CE/CE-372.png");
	this.load.image("course-CE412", "src/assets/CourseCard/CE/CE-412.png");
	this.load.image("course-CE481", "src/assets/CourseCard/CE/CE-481.png");
	this.load.image("course-CE491", "src/assets/CourseCard/CE/CE-491.png");
	// -- CEM courses
	this.load.image("course-CCEM201", "src/assets/CourseCard/CEM/CCE-201.png");
	this.load.image("course-CCE203", "src/assets/CourseCard/CEM/CCE-203.png");
	this.load.image("course-CCE321", "src/assets/CourseCard/CEM/CCE-321.png");
	this.load.image("course-CE427", "src/assets/CourseCard/CEM/CE-427.png");
	this.load.image("course-CEM341", "src/assets/CourseCard/CEM/CEM-341.png");
	this.load.image("course-CEM381", "src/assets/CourseCard/CEM/CEM-381.png");
	this.load.image("course-CEM441", "src/assets/CourseCard/CEM/CEM-441.png");
	this.load.image("course-CEM471", "src/assets/CourseCard/CEM/CEM-471.png");
	this.load.image("course-CEM472", "src/assets/CourseCard/CEM/CEM-472.png");
	this.load.image("course-ECON201", "src/assets/CourseCard/CEM/ECON-201.png");
	// -- CHE courses
	this.load.image("course-CH231", "src/assets/CourseCard/CHE/CH-231.png");
	this.load.image("course-CH232", "src/assets/CourseCard/CHE/CH-232.png");
	this.load.image("course-CH233", "src/assets/CourseCard/CHE/CH-233.png");
	this.load.image("course-CH331", "src/assets/CourseCard/CHE/CH-331.png");
	this.load.image("course-CHE312", "src/assets/CourseCard/CHE/CHE-312.png");
	this.load.image("course-CHE331", "src/assets/CourseCard/CHE/CHE-331.png");
	this.load.image("course-CHE332", "src/assets/CourseCard/CHE/CHE-332.png");
	this.load.image("course-CHE333", "src/assets/CourseCard/CHE/CHE-333.png");
	this.load.image("course-CHE361", "src/assets/CourseCard/CHE/CHE-361.png");
	this.load.image("course-CHE411", "src/assets/CourseCard/CHE/CHE-411.png");
	this.load.image("course-CHE443", "src/assets/CourseCard/CHE/CHE-443.png");
	this.load.image("course-CHE461", "src/assets/CourseCard/CHE/CHE-461.png");
	// -- CS courses
	this.load.image("course-CS46X", "src/assets/CourseCard/CS/CS-46X.jpg");
	this.load.image("course-CS261", "src/assets/CourseCard/CS/CS-261.jpg");
	this.load.image("course-CS290", "src/assets/CourseCard/CS/CS-290.jpg");
	this.load.image("course-CS344", "src/assets/CourseCard/CS/CS-344.jpg");
	this.load.image("course-CS361", "src/assets/CourseCard/CS/CS-361.jpg");
	this.load.image("course-CS362", "src/assets/CourseCard/CS/CS-362.jpg");
	this.load.image("course-CS381", "src/assets/CourseCard/CS/CS-381.jpg");
	this.load.image("course-CS391", "src/assets/CourseCard/CS/CS-391.jpg");
	this.load.image("course-CS444", "src/assets/CourseCard/CS/CS-444.jpg");
	this.load.image("course-CS475", "src/assets/CourseCard/CS/CS-475.jpg");
	// -- ECE courses
	this.load.image("course-CHE444", "src/assets/CourseCard/ECE/CHE-444.jpg");
	this.load.image("course-CHE499", "src/assets/CourseCard/ECE/CHE-499.jpg");
	this.load.image("course-ECE271", "src/assets/CourseCard/ECE/ECE-271.jpg");
	this.load.image("course-ECE322", "src/assets/CourseCard/ECE/ECE-322.jpg");
	this.load.image("course-ECE341", "src/assets/CourseCard/ECE/ECE-341.jpg");
	this.load.image("course-ECE351", "src/assets/CourseCard/ECE/ECE-351.jpg");
	this.load.image("course-ECE391", "src/assets/CourseCard/ECE/ECE-391.jpg");
	this.load.image("course-ENGR201", "src/assets/CourseCard/ECE/ENGR-201.jpg");
	this.load.image("course-ENGR202", "src/assets/CourseCard/ECE/ENGR-202.jpg");
	this.load.image("course-ENGR203", "src/assets/CourseCard/ECE/ENGR-203.jpg");
	this.load.image("course-PH211", "src/assets/CourseCard/ECE/PH-211.jpg");
	this.load.image("course-PH212", "src/assets/CourseCard/ECE/PH-212.jpg");
	this.load.image("course-PH481", "src/assets/CourseCard/ECE/PH-481.jpg");
	// -- ENVE courses
	this.load.image("course-ENVECE313", "src/assets/CourseCard/ENVE/CE-313.png");
	this.load.image("course-CHE311", "src/assets/CourseCard/ENVE/CHE-311.png");
	this.load.image("course-ENVE322", "src/assets/CourseCard/ENVE/ENVE-322.png");
	this.load.image("course-ENVE415", "src/assets/CourseCard/ENVE/ENVE-415.png");
	this.load.image("course-ENVE421", "src/assets/CourseCard/ENVE/ENVE-421.png");
	this.load.image("course-ENVE422", "src/assets/CourseCard/ENVE/ENVE-422.png");
	this.load.image("course-ENVE425", "src/assets/CourseCard/ENVE/ENVE-425.png");
	this.load.image("course-ENVE431", "src/assets/CourseCard/ENVE/ENVE-431.png");
	this.load.image("course-GEO221", "src/assets/CourseCard/ENVE/GEO-221.png");
	this.load.image("course-MB230", "src/assets/CourseCard/ENVE/MB-230.png");
	// -- ESE courses
	this.load.image("course-BA357", "src/assets/CourseCard/ESE/BA-357.png");
	this.load.image("course-ENGR390", "src/assets/CourseCard/ESE/ENGR-390.png");
	this.load.image("course-ESE330", "src/assets/CourseCard/ESE/ESE-330.png");
	this.load.image("course-ESE355", "src/assets/CourseCard/ESE/ESE-355.png");
	this.load.image("course-ESE360", "src/assets/CourseCard/ESE/ESE-360.png");
	this.load.image("course-ESE430", "src/assets/CourseCard/ESE/ESE-430.png");
	this.load.image("course-ESE450", "src/assets/CourseCard/ESE/ESE-450.png");
	this.load.image("course-ESE470", "src/assets/CourseCard/ESE/ESE-470.png");
	this.load.image("course-ESE471", "src/assets/CourseCard/ESE/ESE-471.png");
	this.load.image("course-ESE497", "src/assets/CourseCard/ESE/ESE-497.png");
	// -- IE courses
	this.load.image("course-ENGR211", "src/assets/CourseCard/IE/ENGR-211.png");
	this.load.image("course-ENGR212", "src/assets/CourseCard/IE/ENGR-212.png");
	this.load.image("course-IE212", "src/assets/CourseCard/IE/IE-212.png");
	this.load.image("course-IE355", "src/assets/CourseCard/IE/IE-355.png");
	this.load.image("course-IE366", "src/assets/CourseCard/IE/IE-366.png");
	this.load.image("course-IE367", "src/assets/CourseCard/IE/IE-367.png");
	this.load.image("course-IE412", "src/assets/CourseCard/IE/IE-412.png");
	this.load.image("course-IE415", "src/assets/CourseCard/IE/IE-415.png");
	this.load.image("course-IE425", "src/assets/CourseCard/IE/IE-425.png");
	this.load.image("course-IE426", "src/assets/CourseCard/IE/IE-426.png");
	// -- ME courses
	this.load.image("course-ENGR248", "src/assets/CourseCard/ME/ENGR-248.png");
	this.load.image("course-ME203", "src/assets/CourseCard/ME/ME-203.png");
	this.load.image("course-ME217", "src/assets/CourseCard/ME/ME-217.png");
	this.load.image("course-ME310", "src/assets/CourseCard/ME/ME-310.png");
	this.load.image("course-ME316", "src/assets/CourseCard/ME/ME-316.png");
	this.load.image("course-ME330", "src/assets/CourseCard/ME/ME-330.png");
	this.load.image("course-ME351", "src/assets/CourseCard/ME/ME-351.png");
	this.load.image("course-ME373", "src/assets/CourseCard/ME/ME-373.png");
	this.load.image("course-ME382", "src/assets/CourseCard/ME/ME-382.png");
	this.load.image("course-ME383", "src/assets/CourseCard/ME/ME-383.png");
	this.load.image("course-ME412", "src/assets/CourseCard/ME/ME-412.png");
	this.load.image("course-ME414", "src/assets/CourseCard/ME/ME-414.png");
	this.load.image("course-ME420", "src/assets/CourseCard/ME/ME-420.png");
	this.load.image("course-ME424", "src/assets/CourseCard/ME/ME-424.png");
	// -- NSE courses
	this.load.image("course-NSE217", "src/assets/CourseCard/NSE/NSE-217.png");
	this.load.image("course-NSE234", "src/assets/CourseCard/NSE/NSE-234.png");
	this.load.image("course-NSE235", "src/assets/CourseCard/NSE/NSE-235.png");
	this.load.image("course-NSE236", "src/assets/CourseCard/NSE/NSE-236.png");
	this.load.image("course-NSE311", "src/assets/CourseCard/NSE/NSE-311.png");
	this.load.image("course-NSE331", "src/assets/CourseCard/NSE/NSE-331.png");
	this.load.image("course-NSE332", "src/assets/CourseCard/NSE/NSE-332.png");
	this.load.image("course-NSE415", "src/assets/CourseCard/NSE/NSE-415.png");
	this.load.image("course-NSE435", "src/assets/CourseCard/NSE/NSE-435.png");
	this.load.image("course-NSE451", "src/assets/CourseCard/NSE/NSE-451.png");
	this.load.image("course-NSE452", "src/assets/CourseCard/NSE/NSE-452.png");
	this.load.image("course-NSE457", "src/assets/CourseCard/NSE/NSE-457.png");
	this.load.image("course-NSE467", "src/assets/CourseCard/NSE/NSE-467.png");
	this.load.image("course-NSE473", "src/assets/CourseCard/NSE/NSE-473.png");
	this.load.image("course-NSE474", "src/assets/CourseCard/NSE/NSE-474.png");
	this.load.image("course-NSE475", "src/assets/CourseCard/NSE/NSE-475.png");
	this.load.image("course-NSE481", "src/assets/CourseCard/NSE/NSE-481.png");
	// -- RHP courses
	this.load.image("course-RHP-H310", "src/assets/CourseCard/RHP/RHP-H-310.png");
	this.load.image("course-RHP-H425", "src/assets/CourseCard/RHP/RHP-H-425.png");
	this.load.image("course-RHP-H445", "src/assets/CourseCard/RHP/RHP-H-445.png");
	this.load.image("course-RHP-NSE234", "src/assets/CourseCard/RHP/RHP-NSE-234.png");
	this.load.image("course-RHP-NSE235", "src/assets/CourseCard/RHP/RHP-NSE-235.png");
	this.load.image("course-RHP-NSE236", "src/assets/CourseCard/RHP/RHP-NSE-236.png");
	this.load.image("course-RHP-NSE319", "src/assets/CourseCard/RHP/RHP-NSE-319.png");
	this.load.image("course-RHP-NSE415", "src/assets/CourseCard/RHP/RHP-NSE-415.png");
	this.load.image("course-RHP-NSE435", "src/assets/CourseCard/RHP/RHP-NSE-435.png");
	this.load.image("course-RHP-NSE474", "src/assets/CourseCard/RHP/RHP-NSE-474.png");
	this.load.image("course-RHP-NSE475", "src/assets/CourseCard/RHP/RHP-NSE-475.png");
	this.load.image("course-RHP-NSE481", "src/assets/CourseCard/RHP/RHP-NSE-481.png");
	this.load.image("course-RHP-NSE483", "src/assets/CourseCard/RHP/RHP-NSE-483.png");
	this.load.image("course-RHP-NSE488", "src/assets/CourseCard/RHP/RHP-NSE-488.png");
	// -- "multi" courses
	this.load.image("course-CS161", "src/assets/CourseCard/CS-161.jpg");
	this.load.image("course-CS162", "src/assets/CourseCard/CS-162.jpg");
	this.load.image("course-ENGR100", "src/assets/CourseCard/ENGR-100.jpg");
	this.load.image("course-ENGR102", "src/assets/CourseCard/ENGR-102.jpg");
	this.load.image("course-ENGR103", "src/assets/CourseCard/ENGR-103.jpg");

	// loading circle animation
	this.load.image("loading", "src/assets/loading.png");
	}

	create() {
	this.CardHandler = new CardHandler();
	this.DeckHandler = new DeckHandler(this);
	this.GameHandler = new GameHandler(this);
	this.SocketHandler = new SocketHandler(this);
	this.UIHandler = new UIHandler(this);
	this.UIHandler.buildUI();
	this.InteractiveHandler = new InteractiveHandler(this);
	}

	update() {}
}
