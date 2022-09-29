import { fromEvent, map, tap } from "rxjs";
export default function () {
	const texts = document.createElement("div");
	texts.classList.add("container");
	texts.innerHTML = `
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel pretium metus, non egestas nisl. Maecenas lectus turpis, sagittis vel nisi in, viverra finibus ex. Nullam vel leo dui. Phasellus a sem massa. Etiam ac felis ut elit accumsan tempor id vitae nisl. Sed dictum nibh quis ligula suscipit malesuada. Ut hendrerit pellentesque mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam semper nisi at erat dictum maximus. Duis sit amet ligula in orci dapibus cursus.
        </p>
        <p>
        Cras mollis tortor sit amet est sodales scelerisque. Etiam ipsum diam, rhoncus at neque ac, venenatis cursus tellus. Ut posuere nisi eget bibendum semper. Sed a lectus condimentum, auctor sapien vitae, varius nunc. Duis maximus felis vitae lectus placerat faucibus. Etiam id sem sit amet elit commodo dapibus in vitae justo. Morbi mattis ipsum eu odio tempor molestie. Mauris finibus vitae nulla ac sagittis. Sed a erat laoreet, fermentum enim vitae, finibus est. Vestibulum vitae lobortis augue. Curabitur at blandit quam. Nam at faucibus nisl. Vestibulum bibendum ligula sollicitudin sapien tempus consequat. Proin ornare pretium libero, in elementum ex. Pellentesque sed euismod nulla, non vestibulum enim. Vivamus eget felis nec arcu eleifend mollis.
        </p>
        <p>
        Praesent faucibus mi et velit suscipit condimentum. Nulla at tempus diam, a convallis ligula. Ut molestie eros at metus eleifend posuere. Nullam ac massa hendrerit, sollicitudin mauris mattis, tempus magna. Vestibulum cursus nulla libero, ac lacinia libero pretium et. Morbi vitae elit nisi. Donec tincidunt, turpis et efficitur dapibus, quam enim aliquam leo, ac lacinia lorem ex faucibus nibh. Praesent ut libero id risus maximus hendrerit. Nulla facilisi. Aenean pellentesque condimentum orci. Integer velit neque, gravida sit amet enim eget, volutpat malesuada ipsum. Sed nibh velit, malesuada hendrerit ultrices ut, ultricies eget nunc. Nulla vitae sagittis felis, eu vestibulum diam.
        </p>
        <p>
        Ut luctus pellentesque ante sit amet convallis. Donec nec hendrerit eros, suscipit tempor arcu. Donec tristique lacus quis magna lacinia, quis varius nisl tempor. Sed non lorem dui. Curabitur sollicitudin est aliquam, iaculis augue sit amet, semper elit. Sed bibendum cursus fringilla. Nunc posuere tortor eget congue auctor. Donec congue ligula neque, in posuere magna luctus vel. Duis ac viverra erat. Praesent facilisis, arcu at placerat iaculis, nisi sapien dapibus nisl, eu mattis orci mi sit amet tellus.
        </p>
        <p>
        Nulla pretium nibh felis, eu tempor mauris faucibus vel. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aenean blandit, velit ac gravida tempus, augue lorem ornare elit, mattis placerat metus lectus et erat. Aenean eu ipsum at nibh pellentesque feugiat tincidunt eget nisl. Aliquam feugiat nunc nec ligula ullamcorper, quis fringilla velit ullamcorper. Nunc hendrerit ornare laoreet. Morbi nisi dolor, eleifend luctus tincidunt vitae, venenatis vel metus. Nulla feugiat interdum vehicula. Phasellus semper malesuada fringilla.
        </p>
        <p>
        In hac habitasse platea dictumst. Pellentesque orci purus, egestas vel dolor nec, iaculis pulvinar risus. Quisque rutrum id urna sit amet rutrum. Maecenas pretium dolor a dui facilisis lobortis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Morbi cursus justo blandit magna suscipit, quis hendrerit arcu condimentum. Donec lectus leo, luctus vel sem sed, egestas fringilla est.
        </p>
        <p>
        Curabitur vehicula volutpat enim, non efficitur magna posuere vitae. Cras ac risus risus. Donec ut dui semper, vulputate enim ornare, faucibus ante. Fusce eget lectus quis justo eleifend mattis at vitae lacus. Fusce tempus ex a arcu venenatis accumsan. Fusce egestas dictum varius. Nulla sit amet cursus orci, eget sodales risus. Integer gravida efficitur ipsum et mollis. Donec a nisl eget leo blandit vehicula. Aliquam ac viverra magna, eget viverra ipsum. Sed mollis purus turpis, nec maximus nibh fringilla eget. Curabitur ut orci ac diam rhoncus luctus. Donec sodales massa eget libero egestas sollicitudin. In quis efficitur augue. Nam in luctus mi.
        </p>
        <p>
        Aenean sit amet velit non ligula malesuada mattis vel aliquet augue. Mauris quis velit diam. Nullam lectus erat, scelerisque nec consectetur lacinia, dignissim blandit ipsum. Morbi ultrices faucibus eros, id molestie lacus feugiat in. Etiam efficitur posuere lacus eu molestie. Nam eu nunc ultricies, auctor nisi nec, pretium ex. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Pellentesque euismod tempus tellus non malesuada.
        </p>
        <p>
        Vestibulum non sapien lorem. Phasellus rhoncus nibh vitae finibus blandit. Etiam ut lobortis velit, vitae aliquet augue. Maecenas quis elit massa. Aenean lobortis in orci at hendrerit. Quisque fringilla nunc eget pellentesque tincidunt. Nulla tempor eros lacus, vel dictum massa efficitur eu. Duis iaculis, metus id facilisis tristique, est risus tempor quam, in lobortis arcu sem eget orci.
        </p>
        <p>
        Proin venenatis pharetra fringilla. Quisque ullamcorper enim ut quam efficitur, eget gravida massa tempus. Quisque a dolor mattis erat mattis bibendum et cursus ligula. Nunc suscipit ultrices fermentum. Phasellus quis nisl et urna consequat vulputate sed nec leo. Sed accumsan arcu eget est elementum pellentesque. Nunc at elit nisi. Nulla interdum metus a eros laoreet sagittis. Curabitur sed lorem rutrum, aliquam magna non, sodales nibh. Vestibulum lacus turpis, commodo accumsan laoreet eu, euismod et nunc.
        </p>
        <p>
        Nam eu mauris sit amet arcu accumsan convallis ut vel erat. Donec commodo erat sit amet leo volutpat, ut vulputate dui maximus. Vestibulum ac sodales dui. Aliquam mollis pulvinar efficitur. Aenean a pulvinar nulla, non egestas lectus. Nunc feugiat tortor in ipsum vehicula auctor. Nulla malesuada egestas nisi, vel accumsan arcu pharetra eu. Sed auctor ipsum elit, a vulputate nisl consectetur non. Mauris id enim vitae erat hendrerit laoreet ut at libero.
        </p>
        <p>
        Nunc sed feugiat sem, sed convallis elit. Donec quis arcu arcu. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Cras finibus aliquam sodales. Morbi eu nunc aliquam, iaculis massa et, accumsan quam. Quisque in felis quis augue aliquet dictum. Integer et vulputate neque, et efficitur ligula. Fusce quis dolor id libero bibendum euismod eget a tortor. Mauris viverra consequat mauris, vitae ultricies sapien varius a. Donec vehicula malesuada massa sed pretium. Cras a velit tempus nulla fringilla semper sit amet eget eros. Sed viverra mattis erat, a venenatis enim blandit non. Vestibulum dictum eget ligula venenatis malesuada. Nam eu nunc malesuada, pellentesque libero et, tempor leo. In hac habitasse platea dictumst. Etiam facilisis vel dolor vel consectetur.
        </p>
        <p>
        Fusce fermentum facilisis urna at tempus. Donec interdum fringilla lacinia. Cras mauris ipsum, rutrum id dolor sagittis, tempus sollicitudin turpis. Nulla laoreet risus at commodo eleifend. Nam vehicula dui ac eleifend rutrum. Mauris hendrerit elit in nibh feugiat luctus. Donec nec augue sapien. Phasellus lacus tortor, lacinia ac lacus vitae, mollis consequat dolor. In hac habitasse platea dictumst.
        </p>
        <p>
        Sed ut dapibus nisi. Phasellus elementum orci ac turpis pulvinar, vitae laoreet nibh elementum. Praesent sit amet urna tempor, venenatis tortor at, egestas lacus. Aenean semper at diam vitae malesuada. Aliquam erat volutpat. Sed in tortor metus. Donec tristique, dui sit amet congue imperdiet, nibh velit malesuada neque, at mattis turpis ligula bibendum tortor. Curabitur ultrices egestas velit a maximus.
        </p>
        <p>
        Donec mauris mauris, feugiat ut elementum at, tempor non nunc. Aenean semper magna sapien, ut feugiat velit volutpat id. Integer tincidunt aliquam dignissim. Nulla molestie consectetur lorem, vel luctus eros placerat eu. Nam et ex tristique, euismod orci non, auctor urna. Vestibulum eleifend ligula non velit feugiat dignissim. Integer ut placerat urna. Maecenas ullamcorper tortor non dui convallis, vitae mattis orci faucibus. Phasellus ac tellus in sapien rutrum tempor. Nam gravida diam et lectus iaculis, id interdum libero rutrum. Fusce ante purus, tincidunt at condimentum sed, maximus nec leo. Nulla eu finibus nisl.
        </p>
        <p>
        Nunc tempor quam sed enim facilisis lacinia. Nulla hendrerit porttitor lacus, lacinia tristique sapien ornare eget. Vivamus nec commodo purus. Sed mollis sed ex non interdum. Cras sodales, ante mollis gravida lacinia, ligula sapien pharetra diam, in rhoncus leo enim quis velit. Fusce gravida cursus tortor ut semper. Sed venenatis, enim ut rutrum iaculis, mauris eros vestibulum metus, in accumsan turpis enim sed diam. Nam vulputate quam eros, vitae porttitor odio accumsan eu.
        </p>
        <p>
        Nam ac porta libero, non suscipit massa. Pellentesque felis risus, tincidunt vel iaculis id, dictum vitae nibh. Phasellus quam mi, feugiat a volutpat a, pellentesque in nisl. Donec ut ipsum congue, semper tellus ut, facilisis est. Donec turpis tortor, malesuada non pellentesque at, porttitor sed velit. Proin porttitor viverra dictum. Curabitur magna eros, ultrices vel imperdiet eu, pharetra ac massa. Suspendisse finibus ante non porta auctor.
        </p>
        <p>
        Donec sed dapibus purus. Aenean facilisis posuere lorem, eget porttitor tortor auctor eu. Aliquam imperdiet consectetur justo in dignissim. Maecenas neque urna, ultricies lacinia elementum eget, aliquet a est. Curabitur ac nisi tempor, hendrerit nunc non, hendrerit libero. Proin interdum placerat orci sit amet consectetur. Duis justo ante, auctor eget diam in, laoreet finibus libero. Etiam lobortis justo tortor, vel facilisis leo faucibus eu. Aenean maximus magna sit amet libero tincidunt rutrum. Etiam quis dui eget ipsum sollicitudin rutrum.
        </p>
        <p>
        Phasellus tristique lectus in varius commodo. Cras at accumsan risus. Etiam tristique nibh vitae mi fermentum rutrum. Nam rutrum odio id dolor hendrerit condimentum. Cras fermentum justo eu massa mattis luctus. Etiam bibendum aliquam nisi, vel suscipit eros aliquam sit amet. Quisque finibus quam id posuere tincidunt. Phasellus sed magna sed nisi euismod feugiat nec vitae mi. Nam sed varius est. Nam venenatis et dui sed luctus. Aliquam varius, mauris tempus egestas mattis, metus massa malesuada enim, nec efficitur libero ipsum in libero. Phasellus sagittis vestibulum efficitur. Duis eget nunc blandit, molestie diam non, vestibulum ex. In hac habitasse platea dictumst. Nullam nisi risus, tempus vel risus ac, tincidunt posuere odio. Duis congue, enim eget volutpat rhoncus, nunc lectus consequat nisl, eu vehicula ligula massa a quam.
        </p>
        <p>
        Nulla facilisi. Sed a leo quam. Nulla blandit auctor sem et pellentesque. Morbi porttitor sit amet nisi sed convallis. Sed hendrerit ac odio vitae dignissim. Maecenas felis erat, euismod at tellus sed, consectetur interdum nisl. Quisque laoreet elementum sodales. Quisque ullamcorper sit amet ex nec rhoncus. Ut eget enim aliquet lacus ullamcorper egestas.
        </p>
    `;
	const body = document.querySelector("body");
	body?.append(texts);

	const progressBar = document.createElement("div");
	progressBar.setAttribute("class", "progress-bar");

	body?.append(progressBar);

	// calc function scrollbar
	const calculateScrollbarPercentage = (event: any) => {
		const { scrollTop, scrollHeight, clientHeight } =
			event.target.documentElement;
		// console.log({ scrollTop, scrollHeight, clientHeight });
		return (scrollTop / (scrollHeight - clientHeight)) * 100;
	};

	// streams
	const scroll$ = fromEvent(document, "scroll");
	// scroll$.subscribe(console.log);

	const progress$ = scroll$.pipe(
		// map((event) => calculateScrollbarPercentage(event))
		map(calculateScrollbarPercentage),
		tap(console.log)
	);
	progress$.subscribe((percentage) => {
		// console.log(`${percentage}%`);
		progressBar.style.width = `${percentage}%`;
	});
}
